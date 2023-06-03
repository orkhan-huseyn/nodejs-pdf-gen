# Node

[Install xelatex on Mac](https://gist.github.com/peterhurford/75957ba9335e755013b87254ec85fab1)

+ `tlmgr install collection-latexextra`

[Install xelatex on Ubuntu](https://tex.stackexchange.com/questions/179778/xelatex-under-ubuntu)

# Benchmarks (kind of)

Generating HTML to PDF using headless browser:

```sh
$ /usr/bin/time -l -h -p node html-to-pdf.js
real 2.74
user 0.76
sys 0.41
           137199616  maximum resident set size
                   0  average shared memory size
                   0  average unshared data size
                   0  average unshared stack size
               51806  page reclaims
                  77  page faults
                   0  swaps
                   0  block input operations
                   0  block output operations
                 127  messages sent
                 100  messages received
                   8  signals received
                 736  voluntary context switches
               11657  involuntary context switches
          1924376017  instructions retired
           721650980  cycles elapsed
            39518272  peak memory footprint
```

Generating from LaTeX tamplate:

```sh
$ /usr/bin/time -l -h -p ./generate.sh
real 0.38
user 0.31
sys 0.05
           190611456  maximum resident set size
                   0  average shared memory size
                   0  average unshared data size
                   0  average unshared stack size
               14170  page reclaims
                   8  page faults
                   0  swaps
                   0  block input operations
                   0  block output operations
                   0  messages sent
                   0  messages received
                   0  signals received
                  25  voluntary context switches
                  72  involuntary context switches
            15851587  instructions retired
             7562555  cycles elapsed
             1032768  peak memory footprint
```
