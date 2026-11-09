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
- `theme.js`: applies the saved light/dark preference before first paint, follows the device setting by default, and powers the accessible header toggle. If browser storage is blocked, switching still works for the current visit.
- Dark colors use the same warm palette; company logos keep their original colors, and print uses the light palette. CSS follows the device theme even without JavaScript.
- `assets/monogram.svg` and `favicon.svg`: original ink-colored m with terracotta round glasses. The header uses the same SVG paths inline so the mark follows the selected theme.
- `assets/morteza-line-portrait.png`: transparent contour portrait generated from the original photo with the built-in image-generation tool. Its alpha is used by the inline SVG in `index.html`; line color comes from `--accent` and the background from `--paper`, so both follow the theme toggle. Centered above the desktop profile text and displayed at 144 px on desktop, 112 px on tablets or short desktop windows, and 88 px on phones.
- `assets/morteza-portrait.svg`: retained square crop of the unmodified source photo.
- `assets/morteza-line-portrait-prompt.txt`: the final generation prompt and source reference.
- `assets/companies/`: logos downloaded from the organizations’ official websites; URLs are recorded in `sources.json`.
- Proud’s description is based on `~/codes/proud/README.md`.

Design direction inspired by https://kozoriz.com/: warm paper colors, monospace typography, a profile sidebar, and an editorial résumé layout, with additional SVG icons. All implementation and decorative artwork here are original; no reference-site photos or illustrations were copied.

Career content comes from ~/codes/cv/memory_bank/CAREER.md and PROJECTS.md, reviewed November 6, 2026. Older draft benchmarks and outdated contribution statuses were excluded. This repository contains no private employer code or application notes.

## Courses and certificates

The compact certificate grid displays all eight credential links in three columns on larger screens, two on tablets, and one on small phones. It has no horizontal scrolling or carousel controls; all cards work without JavaScript and appear in print.

Course names and completion dates were checked against the Maven wrap-up pages and Coursera public verification pages on November 6, 2026. The Scratch to Scale title follows the certificate image (the current wrap-up page uses “Real-World HPC Training”). Coursera’s specialization metadata confirms Deep Learning and all five associated course IDs. Original user-supplied certificate URLs are retained.
