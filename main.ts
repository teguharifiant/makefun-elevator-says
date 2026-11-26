// What the Elevator Would Say
//
// A talking elevator, in its own voice. It carries the same strangers
// every day, up and down, and it knows far more about them than any of
// them realise — which floor they cry on, which floor they lie about —
// yet every ride starts the same way: a polite stranger's "going up?"
// The joke is the gap between what the elevator knows and what it says.
//
// The program writes that one line, exactly 82 characters, to
// /output/entry.txt, with no trailing newline and no extra text.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const entry =
  'I know which floor you cry on, and I still say "going up?" like we have never met.';

// The gate allows 1 to 120 characters; refuse to write anything longer
// rather than submit an entry the scorer would reject as invalid.
if (entry.length < 1 || entry.length > 120) {
  console.error(`entry is ${entry.length} characters, outside the 1-120 limit`);
  process.exit(1);
}

const outputPath = "/output/entry.txt";

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, entry, "utf8");

console.log(entry);
