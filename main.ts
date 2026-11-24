// Seventeen Syllables of Debugging — make.fun bounty
// u-irvan-motion-seventeen-syllables-of-debugging-d194b605
//
// The program writes one haiku about debugging to /output/entry.txt:
// three lines, 5-7-5 syllables, seventeen in total, well under the
// 200-character gate. It is fully deterministic: the same haiku on
// every run, no network, no randomness, no environment input.
//
// Syllable count, by dictionary pronunciation (line by line):
//   Line 1 (5): Red(1) break-point(2) still(1) night(1) = 5
//   Line 2 (7): The(1) log(1) scrolls(1) past(1) the(1) same(1) line(1) = 7
//   Line 3 (5): one(1) com-ma(2) did(1) this(1) = 5
//   Total: 5 + 7 + 5 = 17 syllables.
//
// The picture at the centre is concrete — a red breakpoint, a log
// scrolling past the same line at night — and the last line turns
// the poem: hours of staring collapse into a single comma.
//
// Before writing, the program checks its own haiku against the
// gate (three lines, 5-7-5, 1-200 characters) and refuses to write
// anything that fails, so a bad edit can never ship a bad entry.

import { mkdirSync, writeFileSync } from "node:fs";

// New files are created 0644 and new directories 0755 under this
// umask. Never chmod the output path: the grading sandbox runs as a
// different uid and chmod on a directory it does not own fails.
process.umask(0o022);

const HAIKU: readonly string[] = [
  "Red breakpoint, still night",
  "The log scrolls past the same line",
  "one comma did this",
];

// Dictionary syllable counts for every word the haiku uses.
// "breakpoint" is two spoken syllables (break-point); "comma" is
// two (com-ma); every other word here is one.
const SYLLABLES: Readonly<Record<string, number>> = {
  red: 1,
  breakpoint: 2,
  still: 1,
  night: 1,
  the: 1,
  log: 1,
  scrolls: 1,
  past: 1,
  same: 1,
  line: 1,
  one: 1,
  comma: 2,
  did: 1,
  this: 1,
};

const EXPECTED: readonly number[] = [5, 7, 5];

function countSyllables(line: string): number {
  let total = 0;
  for (const word of line.toLowerCase().match(/[a-z]+/g) ?? []) {
    const count = SYLLABLES[word];
    if (count === undefined) {
      throw new Error(`no syllable count for word: ${word}`);
    }
    total += count;
  }
  return total;
}

function validate(lines: readonly string[]): string {
  if (lines.length !== 3) {
    throw new Error(`haiku must have 3 lines, got ${lines.length}`);
  }
  lines.forEach((line, i) => {
    const count = countSyllables(line);
    if (count !== EXPECTED[i]) {
      throw new Error(
        `line ${i + 1} has ${count} syllables, expected ${EXPECTED[i]}: ${line}`,
      );
    }
  });
  const text = lines.join("\n") + "\n";
  if (text.length < 1 || text.length > 200) {
    throw new Error(`haiku must be 1-200 characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("haiku must not be only whitespace");
  }
  return text;
}

const text = validate(HAIKU);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
