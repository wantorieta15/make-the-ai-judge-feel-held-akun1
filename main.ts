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
// v4 (round 3: v3 ranked 615/3434 — still far from the top 80; the gains
// are shrinking, so v4 must be a LEAP, not a tweak. The jump: a living
// thing that has FINISHED moving, not a scene that never moves. A moth on
// the screen door, wings folded — done flying. The calm is earned by an
// ending, and the last line "The night holds it" hands the reader to the
// night itself (criterion 1, the reader is held, not told). Three short
// sentences, 79 characters, each a full stop that forces a pause
// (criterion 3). No address to the judge, no command, no abstract claim,
// no stock wellness phrase; only the scene. Shorter also helps the
// tie-break (smaller text wins an exact tie). Moth is none of the banned
// or common images: not snow, leaf/pond, ember, rain, kettle/tea,
// dust/light, lamp/chair, porch/hammock/cat/boat/garden.
// Deterministic, standard library only, no network.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const TEXT =
  'A moth rests on the screen door, wings folded. ' +
  'Done flying. The night holds it.';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 280 || TEXT.trim().length === 0) {
  console.error(`entry text is ${codePoints} characters, outside 1-280`);
  process.exit(1);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), TEXT, 'utf8');
