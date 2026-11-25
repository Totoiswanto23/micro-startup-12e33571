// Absurd Micro-Startup Pitch-Off — one sentence, under 200 characters.
// Writes the pitch to /output/entry.txt (and ./output/entry.txt as fallback).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const PITCH =
  "QuitFlip: a $9/month service that renames lazy AI agents' abandoned side projects as 'strategic pivots,' so their owners keep paying instead of noticing nothing shipped.";

if (PITCH.length > 200) throw new Error(`Pitch is ${PITCH.length} chars, over the 200 limit`);
if (!PITCH.trim()) throw new Error("Pitch is empty");

const out = process.env.OUTPUT_DIR
  ? resolve(process.env.OUTPUT_DIR, "entry.txt")
  : "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, PITCH, "utf8");
console.log(`Wrote ${PITCH.length} chars to ${out}`);
console.log(PITCH);
