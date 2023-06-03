# Node

[Install xelatex on Mac](https://gist.github.com/peterhurford/75957ba9335e755013b87254ec85fab1)

+ `tlmgr install collection-latexextra`

[Install xelatex on Ubuntu](https://tex.stackexchange.com/questions/179778/xelatex-under-ubuntu)

# Benchmarks (kind of)

Generating HTML to PDF using headless browser:

```sh
$ time node html-to-pdf.js
node html-to-pdf.js  0.84s user 0.62s system 48% cpu 3.010 total
```

Generating from LaTeX tamplate:

```sh
$ time ./generate.sh
./generate.sh  0.33s user 0.06s system 98% cpu 0.396 total
```
