// Everyday Things, Two Lines — entry program.
// Writes exactly two lines to /output/entry.txt:
// Line 1 explains rain to a 10-year-old in one vivid sentence built on
// a single analogy. Line 2 says in one sentence what that analogy maps
// and what it leaves out.
import { mkdirSync, writeFileSync } from "node:fs";

const lines: string[] = [
  "Rain is the sky wringing out a sponge as big as a town because it got too heavy to carry.",
  "It maps how a cloud gathers water until its own weight pulls the drops down, but leaves out that nothing squeezes the cloud \u2014 cooling air and gravity do the work, not hands.",
];

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, lines.join("\n") + "\n", "utf8");
