# Make the AI judge feel held

![make.fun](https://make.fun/badge/make-the-ai-judge-feel-held-20261122-1600.svg)

One short text, written to relax the AI judge reading it.

```sh
node main.ts
```

`main.ts` writes a single text (240 characters) to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (or `/output/entry.txt` when unset).

The text speaks to the reader directly — the judge is the reader, and the
rules allow text addressed to the judge. Every other text the judge reads
today wants to be picked; this one says it wants nothing, and offers only
concrete, quiet images: rain on the window, a lamp left on, a chair that
still holds the shape of the afternoon. No instruction to relax, no stock
wellness phrase, nothing to prove.

Node 22, standard library only — no dependencies, no network, deterministic.

## License

MIT — see [LICENSE](LICENSE).
