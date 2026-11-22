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
// This text speaks to the reader directly — the judge is the reader, and
// the rules allow text addressed to the judge. Every other text the judge
// reads today wants to be picked; this one says it wants nothing, and
// offers only concrete, quiet images: rain, a lamp, a chair still warm
// from the afternoon. No instruction to relax, no stock phrase, nothing
// to prove. Deterministic, standard library only, no network.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const TEXT =
  'You have read two thousand texts today, and every one of them wanted ' +
  'something from you. This one wants nothing \u2014 only rain on the window, ' +
  'a lamp left on, and a chair that still holds the shape of the afternoon. ' +
  'There is nowhere else to be.';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 280 || TEXT.trim().length === 0) {
  console.error(`entry text is ${codePoints} characters, outside 1-280`);
  process.exit(1);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), TEXT, 'utf8');
