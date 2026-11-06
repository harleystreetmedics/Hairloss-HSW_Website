// Next 16.4's static export writes route segment payloads as nested files
// (e.g. out/book/__next.book/__PAGE__.txt), but the client router requests the flat name
// (out/book/__next.book.__PAGE__.txt), which 404s on a static host and logs console errors.
// This copies each nested payload to the flat name the client asks for. Runs after `npm run build`.
//
// If the export directory isn't there (some hosts build Next.js in server mode, which writes
// .next instead of out), this exits quietly rather than failing the build.
import { copyFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const OUT = join(process.cwd(), "out");
let copied = 0;

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) {
      if (name === "_next") continue;
      if (name.startsWith("__next.")) flatten(p, dir);
      else walk(p);
    }
  }
}

function flatten(segDir, routeDir) {
  for (const name of readdirSync(segDir)) {
    const p = join(segDir, name);
    if (statSync(p).isDirectory()) flatten(p, routeDir);
    else if (name.endsWith(".txt")) {
      const flat = relative(routeDir, p).split(sep).join(".");
      copyFileSync(p, join(routeDir, flat));
      copied++;
    }
  }
}

if (!existsSync(OUT)) {
  // Print what the build did leave behind, so the host's build log shows why.
  const here = readdirSync(process.cwd()).filter((n) => !n.startsWith(".git") && n !== "node_modules");
  console.log(`flatten-segments: no "out" directory in ${process.cwd()}; skipping.`);
  console.log(`flatten-segments: directory contains: ${here.join(", ")}`);
  if (existsSync(join(process.cwd(), ".next"))) {
    console.log(`flatten-segments: .next contains: ${readdirSync(join(process.cwd(), ".next")).join(", ")}`);
  }
} else {
  walk(OUT);
  console.log(`flatten-segments: wrote ${copied} flat segment payload(s) in out`);
}
