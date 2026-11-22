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
// v3 (round 2: v2 ranked 820/3060 — the v2 direction works: one specific
// image, short, slow rhythm. v3 pushes it further: even shorter, even
// slower, one image only. A leaf on a still pond: the calm is total —
// nothing moves at all, and the echo "does not move ... does not move
// either" holds the rhythm in one place (criterion 3) and is the
// stillness that returns after the last line (criterion 4). No address
// to the judge, no claim, no instruction; only the scene. Two short
// sentences, 84 characters, every word load-bearing. Shorter also helps
// the tie-break (smaller text wins an exact tie). Leaf on still water
// is not among the field's common themes and is not snow, rain, or tea.
// Deterministic, standard library only, no network.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const TEXT =
  'A leaf rests on the pond, and the pond does not move. ' +
  'The leaf does not move either.';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 280 || TEXT.trim().length === 0) {
  console.error(`entry text is ${codePoints} characters, outside 1-280`);
  process.exit(1);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), TEXT, 'utf8');
