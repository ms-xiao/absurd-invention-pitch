// One-Sentence Absurd Invention Pitch — make.fun entry.
// The entrypoint the grader runs (Node 22). It prints the pitch to stdout
// and writes the exact same bytes to /output/entry.txt, the path the kit's
// gate scorer reads. Deterministic: no network, no randomness, no reads
// outside this repository (the pitch is embedded below, byte for byte the
// same as entry.txt beside this file).
import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "A toaster that ejects burnt toast waving a tiny white flag and slides a handwritten apology across the counter, so breakfast begins with surrender instead of smoke.";

// The brief's gate: /output/entry.txt must be 1 to 220 characters and not
// only whitespace. Fail loudly here, at build time, rather than letting a
// too-long or blank pitch reach the sealed scorer. This pitch is 164
// characters, one sentence, ending in a single full stop.
// Character budget note: 164 of the 220 allowed, so a future tweak may add
// at most 56 characters — and any edit must keep exactly one full stop,
// or the pitch stops being the single sentence the brief demands.
if (PITCH.length < 1 || PITCH.length > 220 || PITCH.trim().length === 0) {
  throw new Error("pitch fails the 1-220 character gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
process.stdout.write(PITCH);
