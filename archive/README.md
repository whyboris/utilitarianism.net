# Archive

This folder contains instructions for people new to coding, tips for cleaning markdown files imported from _Google Docs_, some old notes, and more details about building the application.

**Table of Contents**
- [First time coding?](#first-time-coding)
- [Importing from Google Docs](#importing-from-google-docs)
- [Miscellaneous Notes](#miscellaneous-notes)
- [Building](#building)

## First time coding

Starting may be daunting, but you can do it! Setting up will take some steps:

1. Install:
   - [git](https://git-scm.com/)
   - a _terminal_ if you don't have one
     - on Mac try [Hyper](https://hyper.is)
     - on Windows you can use _Git Bash_ which is installed when you install _git_ or try [FluentTerminal](https://github.com/felixse/FluentTerminal) or [Tabby](https://github.com/Eugeny/tabby))
   - [Hugo](https://gohugo.io/getting-started/installing/)
     - on Mac I recommend `brew install hugo`
       - this requires you first install [brew](https://brew.sh/)
     - on Windows I recommend `choco install hugo-extended`
       - this requires you first install [chocolatey](https://chocolatey.org/)
   - [VSCode](https://code.visualstudio.com) to easily edit files _(optional)_
2. In your terminal: _note: these steps only need to be done once_
   - _clone_ this repository: `https://github.com/whyboris/utilitarianism.net.git`
   - enter it: `cd utilitarianism.net`
   - install submodules: `git submodule update --init`
3. If you want to _build_ the public version of the website, you'll need to also install:
   - [Node](https://nodejs.org/en/)

From now on any time you want to work on the website, _with your terminal_:

- enter the project folder `cd utilitarianism.net`, and
- run `hugo serve`
- open `http://localhost:1313/` in your browser (this link will appear in your terminal)

After editing any file (with _VSCode_ or any other text editor) and saving it, the website will automatically refresh with the latest changes 🎉

Feel free to reach out with questions by going to [Issues](https://github.com/whyboris/utilitarianism.net/issues)

## Importing from Google Docs

You can easily import Google Documents via [Docs to Markdown](https://workspace.google.com/u/0/marketplace/app/docs_to_markdown/700168918607) (see [documentation](https://github.com/evbacher/gd2md-html/wiki)). See _/archive_ folder for more details.

After adding a document it will likely need some manual fixes:

- Update the metadata section (first few lines, see other files for reference)
- If you install the [MarkdownLint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) in your _VSCode_, you may save some time: right-click and "Format Document"
- The article will likely have formatting errors with _italics_ (_underscores_), so open the `fixit.js` file, update the `FILE_TO_FIX` string, and execute: `node fixit.js`
  - _note_ rather than jumping through below hoops, just use **MarkdownLint** (see instructions below)
  - _note_ the `fixit.js` file is meant to be executed from the root of the repository (in `/` not in `/archive` where it resides) - so temporarily move it there if you use it.
  - it may be best to temporarily remove the _Resources and Further Reading_ and _Footnotes_ during this operation
  - alternatively you can render the HTML as is and _Ctrl+F_ (find) `_` on the page and manually update
- Add the `{{< TOC >}}` to automatically generate the _Table of Contents_
- Update the four spaces indentations to be `>` (quote)
- Remove the "## How to cite" heading and replace the entire citation with `{{< how-to-cite >}}`
  - if the authors are not "MacAskill, W., Meissner, D., and Chappell, R.Y." then do `{{< how-to-cite authors="your authors" >}}`
- Add the _Action_ button shortcode `{{< button >}}`
- If a footnote was multi-paragraph, add the indentation so the text stays with the footnote (rather than being rendered to the page at the bottom)
- Look over the document for any other manual fixes
- Consider adding [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) for catching some spelling mistakes.

## Miscellaneous Notes

- Consult _Hugo_ [documentation](https://gohugo.io/documentation/) if you have trouble, or reach out to Boris with questions.
- We have a shortcode that will generate the table of contents: `{{< TOC >}}`
- We enabled `unsafe` mode for _Markdown_ to allow [subscript](https://discourse.gohugo.io/t/footnote-sup-tag-not-working-inside-markdownify-help/25426) and other _HTML_ elements (e.g. see the _glossary.md_ file)
- Pages that have the same name as a folder need to be moved into the folder and renamed to `_index.md` to work properly (e.g. `objections-to-utilitarianism`)
  - these use the `list.html` _layout_
- _favicon_ is generated with [this website](https://realfavicongenerator.net/)
- There is also a custom `svg` _favicon_ to handle dark-theme browser, see [instructions](https://web.dev/building-an-adaptive-favicon/)
- `site-header.html` is unused - meant for homepage only (it may one day include a language dropdown)
- In the future we may want to use some `rtl` support (try `$.Site.Language.LanguageDirection "rtl"`)
- We could use [Prettier](https://prettier.io/) to format our code, along with [prettier-plugin-go-template](https://github.com/NiklasPor/prettier-plugin-go-template)
  - Install both globally `npm install -g prettier` & `npm install -g prettier-plugin-go-template` and then run `prettier --write .` to format all the files in the repository

## Building

- **PDF** generation happens with [website2pdf](https://github.com/jgazeau/website2pdf).
  - For more details see the [PDF/README.md](../pdf/README.md) file.
- **Search** is handlede with [pagefind](https://pagefind.app/)
  - If `npm install` errors out on _Windows_, consider using the `PowerShell` terminal instead
  - It is build with `just search` and is part of the `just build` command, no manual steps needed
  - During the build, to add image previews to the side of search results, `search = true` is toggled in `config.toml`
  - Durning the build, `hugo` runs in parallel with `pagefind --source public` which creates the `_pagefind` folder inside `/public`
- If you run _hugo_ and see the warning _"port 1313 already in use, attempting to use an available port"_ try `npm run kill-hugo` which is equivalent to [`npx kill-port 1313`](https://github.com/tiaanduplessis/kill-port)
