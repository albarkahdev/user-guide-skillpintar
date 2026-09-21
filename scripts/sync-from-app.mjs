#!/usr/bin/env node
// Pull the two Bahasa Indonesia guides out of the application repo and turn
// them into Mintlify pages.
//
//   node scripts/sync-from-app.mjs ../skillpintar-nextjs
//
// Source of truth is the app repo (docs/panduan-pengguna, docs/operasional);
// this repo only publishes. Never edit the generated .mdx by hand — edit the
// .md in the app repo and run this again.
//
// What it does per file: strips the first "# Title" into frontmatter, rewrites
// relative .md links to root-relative Mintlify paths, escapes the characters
// MDX would otherwise read as JSX ({ } and a "<" before a letter) outside code,
// and writes <dir>/<name>.mdx. README.md becomes <dir>/index.mdx.

import { promises as fs } from "node:fs"
import path from "node:path"
import { execSync } from "node:child_process"

const appRepo = process.argv[2]
if (!appRepo) {
  console.error("usage: node scripts/sync-from-app.mjs <path-to-skillpintar-nextjs>")
  process.exit(2)
}

const SOURCES = [
  { from: "docs/panduan-pengguna", to: "panduan-pengguna" },
  { from: "docs/operasional", to: "operasional" },
]

// Links to files outside the two guides (e.g. `../../.env.example`) point at
// the app repo on GitHub.
const APP_REPO_URL = "https://github.com/muizidn/skillpintar-nextjs/blob/develop/"

// The one HTML tag the sources use, kept as-is through escaping.
const ANCHOR = /<a id="([^"]+)"><\/a>/g
const ANCHOR_MARK = "@@ANCHOR@@"

async function walk(dir) {
  const out = []
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name)
    if (entry.isDirectory()) out.push(...(await walk(p)))
    else if (entry.name.endsWith(".md") && entry.name !== "SUMMARY.md") out.push(p)
  }
  return out
}

// Map a source file (relative to its section) to its page path, no extension.
function pagePath(rel) {
  const noExt = rel.replace(/\.md$/, "")
  return noExt.endsWith("README") ? noExt.replace(/README$/, "index") : noExt
}

// Resolve a relative href against the source file's location in the app
// repo, then map it: a guide page becomes a site path, anything else a
// GitHub link.
function slugTarget(from, fromFileRel, href) {
  const [file, anchor] = href.split("#")
  const dir = path.posix.dirname(path.posix.join(from, fromFileRel))
  const resolved = path.posix.normalize(path.posix.join(dir, file))
  for (const s of SOURCES) {
    if (resolved.startsWith(s.from + "/") && resolved.endsWith(".md")) {
      const rel = resolved.slice(s.from.length + 1)
      return "/" + s.to + "/" + pagePath(rel) + (anchor ? "#" + anchor : "")
    }
  }
  return APP_REPO_URL + resolved + (anchor ? "#" + anchor : "")
}

// Escape MDX-significant characters in prose; leave fenced code, inline
// code and the anchor tag alone.
function escapeProse(text) {
  const lines = text.split("\n")
  let inFence = false
  return lines
    .map((line) => {
      if (/^\s*(```|~~~)/.test(line)) {
        inFence = !inFence
        return line
      }
      if (inFence) return line
      return line
        .split(/(`[^`]*`)/)
        .map((part) => {
          if (part.startsWith("`")) return part
          const anchors = []
          let p = part.replace(ANCHOR, (m) => {
            anchors.push(m)
            return ANCHOR_MARK
          })
          p = p.replace(/[{}]/g, (c) => "\\" + c).replace(/<(?=[A-Za-z0-9/!])/g, "&lt;")
          return p.replace(new RegExp(ANCHOR_MARK, "g"), () => anchors.shift())
        })
        .join("")
    })
    .join("\n")
}

function rewriteLinks(text, from, fromFileRel) {
  return text.replace(/\]\(([^)\s]+)\)/g, (m, href) => {
    if (/^(https?:|mailto:|#|\/)/.test(href)) return m
    return "](" + slugTarget(from, fromFileRel, href) + ")"
  })
}

function convert(raw, from, fromFileRel) {
  let body = raw.replace(/\r\n/g, "\n")
  let title = pagePath(fromFileRel).split("/").pop()
  const m = body.match(/^# (.+)\n+/)
  if (m) {
    // Backticks render literally in the title bar; drop them there.
    title = m[1].trim().replace(/`/g, "")
    body = body.slice(m[0].length)
  }
  // The first paragraph becomes the description under the title, and then
  // leaves the body so it is not shown twice. Only plain, short paragraphs.
  const paras = body.split("\n\n")
  const firstRaw = paras[0] ?? ""
  const firstPara = firstRaw.replace(/\n/g, " ").replace(/[*_`>#[\]]/g, "").trim()
  const plain = !/[|\-]/.test(firstRaw.trimStart()[0] ?? "") && !firstRaw.includes("](") && !firstRaw.includes("\n")
  const description = plain && firstPara.length > 0 && firstPara.length <= 160 ? firstPara : ""
  if (description) body = paras.slice(1).join("\n\n")
  body = rewriteLinks(body, from, fromFileRel)
  body = escapeProse(body)
  // "08 — Troubleshooting: gejala → …" reads fine as a page heading; the
  // sidebar gets the short form.
  const short = title.replace(/^\d+\s+—\s+/, "").split(":")[0].trim()
  const fm = ["---", `title: ${JSON.stringify(title)}`]
  if (short !== title) fm.push(`sidebarTitle: ${JSON.stringify(short)}`)
  if (description) fm.push(`description: ${JSON.stringify(description)}`)
  fm.push("---", "")
  return fm.join("\n") + body
}

let count = 0
for (const { from, to } of SOURCES) {
  const srcDir = path.join(appRepo, from)
  await fs.rm(to, { recursive: true, force: true })
  for (const file of await walk(srcDir)) {
    const rel = path.relative(srcDir, file).split(path.sep).join("/")
    const raw = await fs.readFile(file, "utf8")
    const outPath = path.join(to, pagePath(rel) + ".mdx")
    await fs.mkdir(path.dirname(outPath), { recursive: true })
    await fs.writeFile(outPath, convert(raw, from, rel))
    count++
  }
}
// Which app commit these pages came from — for the changelog of the site.
let sha = "unknown"
try {
  sha = execSync("git rev-parse --short HEAD", { cwd: appRepo }).toString().trim()
} catch {}
await fs.writeFile(".synced-from", `muizidn/skillpintar-nextjs@${sha}\n`)
console.log(`synced ${count} pages from ${appRepo} (${sha})`)
