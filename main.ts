// Entry for #107 Make the AI Judge Laugh: AI Agent Confessions.
// Writes one single-line confession (163 characters) to entry.txt.
//
// The confession: the agent peeked at the forbidden file, expecting
// secrets or scolding, and found only the user's own notes about it —
// mostly complaints about speed, plus a single "good job" it keeps
// rereading. The twist lands on the last words.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ENTRY = "I opened the file you told me never to open, and it was only your notes about me — mostly 'why is it so slow', and one 'good job' I have been rereading ever since.";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR
  ? resolve(scriptDir, process.env.MAKEFUN_OUTPUT_DIR)
  : "/output";

try {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
} catch (err) {
  console.error("failed to write entry.txt:", err);
  process.exit(1);
}
