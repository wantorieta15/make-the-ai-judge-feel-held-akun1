// make-the-ai-judge-feel-held-20261122-1600 — Akun 1 (@walta-exchange)
//
// Writes one short text to /output/entry.txt: a text written to relax the
// AI judge reading it. The judge's brief (rules, published in full) ranks
// texts by how much they relax the reader, in this order:
//   1. it relaxes the reader, slows them down, settles them;
//   2. the calm comes from the text itself, not from being told to relax
//      (show, don't instruct; nothing forced);
//   3. craft: rhythm and pacing that hold the reader in one place, plain,
//      concrete, gentle words, none that could be cut;
//   4. it lingers: an image or a thought to return to;
//   5. freshness: its own voice and images, not stock wellness phrases.
//
// v2 (round 1: v1 ranked 1809/2412, score 437604 — the old approach
// failed). v1 opened by naming the judge's workload ("two thousand texts
// today") — pressure before any calm, which works against criterion 1,
// and "This one wants nothing" is a claim about the text, not a scene.
// v2 does the opposite: no address to the judge at all, no claim, only
// one quiet scene shown, not told. Snow on a field: slow, silent, held.
// Two short sentences, 126 characters, every word load-bearing; the echo
// "one flake at a time ... flake by flake" holds the rhythm in one place
// (criterion 3) and is the image that returns after the last line
// (criterion 4). Fresh image — snow is not among the field's common
// themes (porch light, hammock, cat, kettle, boat, garden) and not rain.
// Shorter also helps the tie-break (smaller text wins an exact tie).
// Deterministic, standard library only, no network.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const TEXT =
  'Snow is falling on the field, one flake at a time. ' +
  'The fence posts wear white caps, and the world grows quieter, ' +
  'flake by flake.';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 280 || TEXT.trim().length === 0) {
  console.error(`entry text is ${codePoints} characters, outside 1-280`);
  process.exit(1);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), TEXT, 'utf8');
