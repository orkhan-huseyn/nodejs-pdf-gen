# Node

[Install xelatex on Mac](https://gist.github.com/peterhurford/75957ba9335e755013b87254ec85fab1)

- `tlmgr install collection-latexextra`

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

Generating using `wkhtml`:

```sh
$ /usr/bin/time -l -h -p ./wkhtml.sh
real 1.55
user 0.50
sys 0.09
            43528192  maximum resident set size
                   0  average shared memory size
                   0  average unshared data size
                   0  average unshared stack size
               12827  page reclaims
                 220  page faults
                   0  swaps
                   0  block input operations
                   0  block output operations
                  11  messages sent
                  16  messages received
                   0  signals received
                 246  voluntary context switches
                3282  involuntary context switches
            14752341  instructions retired
             8794820  cycles elapsed
             1049152  peak memory footprint
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

# Summary (kind of)

- Pupetteer - Takes total of 2.74 seconds. Generated PDF is 53 KB. (runs on headless chromium)
- Wkhtmltopdf - Takes total of 1.55 seconds. Generated PDF is about 20 KB. (runs on headless Qt WebKit rendering engine)
- Xelatex - Takes total of 0.38 seconds. Generated PDF is about 61 KB. (just runs xelatex compiler)

For detailed, memory and CPU usage, check CLI outputs provided above.

**Note**: LaTeX tempalate is a different template than the ones used in HTML to PDF generation, thus I cannot verify which method is more efficient in terms of output size. I am not good at writing latex templates from scratch so I used [a template from Overlef](https://www.overleaf.com/latex/templates/simple-invoice-template/gmxrwszhhccr).
