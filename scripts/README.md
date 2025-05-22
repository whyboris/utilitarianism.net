# Scripts

Folder contains scripts:

- `fixbib.js`
  - meant only for _Spanish_ version of the website to create the bibliography
  - will read `assets/bib.json` (you need to manualy copy and rename `stable.bib` from [here](https://github.com/tlon-team/babel-refs/tree/main/bib))
  - and create `assets/bib2.json` which is needed for the bibliography
- `fixit.js`
  - will fix problems with italics
  - meant to be run after importing from Google Doc
  - e.g. `_hello _` where there is an erroneous space
  - this script may have errors; please manually check
- `markdown-footnote-order.js`
  - fixes footnotes `[1], [1a], [2]` to be `[1], [2], [3]`
  - purely for aesthetics; not needed
  - this script is now an [npm package](https://github.com/whyboris/Fix-Markdown-Footnotes)
- `translate-links.js`
  - helps if the translated documents have hardcoded links to _utilitarianism.net_
  - requires manual steps that are annoying, but still faster than not using a script
  - instructions inside
  - move into root directory to run
