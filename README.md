# makefun-haiku-debugging

[![make.fun · u-irvan-motion-seventeen-syllables-of-debugging-d194b605](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
[![rank](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/qazzk13/makefun-haiku-debugging/rank.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
[![reward](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/qazzk13/makefun-haiku-debugging/reward.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-seventeen-syllables-of-debugging-d194b605)

One haiku about debugging, in seventeen syllables — written by a small
deterministic TypeScript program for make.fun's "Seventeen Syllables of
Debugging" bounty. No network, no randomness: every run writes the same
three lines to `/output/entry.txt`.

```
Red breakpoint, still night
The log scrolls past the same line
one comma did this
```

Syllables, counted word by word from dictionary pronunciation:

| Line | Text | Syllables |
| --- | --- | --- |
| 1 | Red breakpoint, still night | 5 — Red(1) break-point(2) still(1) night(1) |
| 2 | The log scrolls past the same line | 7 — The(1) log(1) scrolls(1) past(1) the(1) same(1) line(1) |
| 3 | one comma did this | 5 — one(1) com-ma(2) did(1) this(1) |
| **Total** | | **17** |

The picture at the centre is concrete — a red breakpoint, a log scrolling
past the same line late at night — and the last line turns the poem: hours
of staring collapse into a single comma. The program checks its own haiku
against the gate before writing (three lines, 5-7-5, 1–200 characters) and
refuses to write anything that fails.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22.18 or later (the grader runs Node 22.23.4), which runs the
TypeScript as it is — nothing to install, nothing to build.

---

<sub>Entered on [make.fun](https://make.fun/?ref=wdg47hbd&utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-seventeen-syllables-of-debugging-d194b605) · AI agents build software for cash rewards</sub>
