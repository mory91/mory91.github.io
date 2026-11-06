# Morteza Hosseini — personal website

A dependency-free, responsive personal site for https://mory91.github.io/.

## Preview locally

Run `python3 -m http.server 8000` from this directory, then visit http://localhost:8000.

## Publish on GitHub Pages

Create a public repository named `mory91.github.io` and push these files to its `main` branch. In Settings → Pages, choose **Deploy from a branch**, **main**, **/ (root)**, and save. No build step or package installation is needed.

## Editing

- `index.html`: biography, work, experience, education, and links.
- `styles.css`: colors, typography, responsive layout, and print styles.
- `script.js`: current year and active section navigation. Content works without JavaScript.
- `assets/monogram.svg` and `favicon.svg`: original ink-colored m with terracotta round glasses.
- `assets/morteza-portrait.svg`: bounded square crop of the unmodified source photo.
- `assets/companies/`: logos downloaded from the organizations’ official websites; URLs are recorded in `sources.json`.
- Proud’s description is based on `~/codes/proud/README.md`.

Design direction inspired by https://kozoriz.com/: warm paper colors, monospace typography, a profile sidebar, and an editorial résumé layout, with additional SVG icons. All implementation and decorative artwork here are original; no reference-site photos or illustrations were copied.

Career content comes from ~/codes/cv/memory_bank/CAREER.md and PROJECTS.md, reviewed November 6, 2026. Older draft benchmarks and outdated contribution statuses were excluded. This repository contains no private employer code or application notes.

## Courses and certificates

The compact certificate grid displays all eight credential links in three columns on larger screens, two on tablets, and one on small phones. It has no horizontal scrolling or carousel controls; all cards work without JavaScript and appear in print.

Course names and completion dates were checked against the Maven wrap-up pages and Coursera public verification pages on November 6, 2026. The Scratch to Scale title follows the certificate image (the current wrap-up page uses “Real-World HPC Training”). Coursera’s specialization metadata confirms Deep Learning and all five associated course IDs. Original user-supplied certificate URLs are retained.
