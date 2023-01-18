# Utilitarianism.net

Official code for the [_utilitarianism.net_](https://www.utilitarianism.net/) website.

## Developing

We are using [_Hugo_](https://gohugo.io/) to build the website and several helper libraries and scripts to generate PDFs and add search functionality.

If you're new to coding, see the [section below](#first-time-coding).

First time:

- Install [Hugo](https://gohugo.io/getting-started/installing/) (current version is `0.109.0`)
- Run `git submodule update --init` to download the themes submodule

Any time after:

```sh
hugo serve
```

## Building

First time:

- install [Node](https://nodejs.org/en/)
- install [just](https://github.com/casey/just)
- run `npm install` which will install:
  - [pagefind](https://pagefind.app) to generate the search index
  - [website2pdf](https://github.com/jgazeau/website2pdf) to generate PDFs

Now, simply run the commands: `just build` and you're done 🚀

Under the hood this will happen:

1. Build the _Search_ index
2. Build the _PDF_ files
3. Build the final website

See `justfile` for details which in turn uses `build.js` to do some of its bidding.

_Bonus:_ if you run `npm install -g serve` you'll be able to then preview the production website with `cd public` followed by `serve` 🎉

## Adding documents

All the pages were imported from Google Documents via [Docs to Markdown](https://workspace.google.com/u/0/marketplace/app/docs_to_markdown/700168918607) (see [documentation](https://github.com/evbacher/gd2md-html/wiki)).

After adding a document it will likely need some manual fixes:

- Update the metadata section (first few lines, see other files for reference)
- It will likely have formatting errors with _italics_ (_underscores_), so open the `fixit.js` file, update the `FILE_TO_FIX` string, and execute: `node fixit.js`
  - it may be best to temporarily remove the _Resources and Further Reading_ and _Footnotes_ during this operation
  - alternatively you can render the HTML as is and _Ctrl+F_ (find) `_` on the page and manually update
- Add the `{{< TOC >}}` to automatically generate the _Table of Contents_
- Update the four spaces indentations to be `>` (quote)
- Remove the "## How to cite" heading and replace the entire citation with `{{< how-to-cite >}}`
  - if the authors are not "MacAskill, W., Meissner, D., and Chappell, R.Y." then do `{{< how-to-cite authors="your authors" >}}`
- Add the _Action_ button shortcode `{{< button >}}`
- If a footnote was multi-paragraph, add the indentation so the text stays with the footnote (rather than being rendered to the page at the bottom)
- If you have the [MarkdownLint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) in your _VSCode_, right-click and "Format Document"
- Look over the document for any other manual fixes

Consider adding [MarkdownLint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) to your _VSCode_ for automatic error highlighting, and adding [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) for catching some spelling mistakes.

## Notes

- Consult _Hugo_ [documentation](https://gohugo.io/documentation/) if you have trouble, or reach out to Boris with questions.
- We have a shortcode that will generate the table of contents: `{{< TOC >}}`
- We enabled `unsafe` mode for _Markdown_ to allow [subscript](https://discourse.gohugo.io/t/footnote-sup-tag-not-working-inside-markdownify-help/25426) and other _HTML_ elements (e.g. see the _glossary.md_ file)
- Pages that have the same name as a folder need to be moved into the folder and renamed to `_index.md` to work properly (e.g. `objections-to-utilitarianism`)
  - these use the `list.html` _layout_
- `site-header.html` is unused - meant for homepage only (would include language dropdown)
- _favicon_ generated with [this website](https://realfavicongenerator.net/) & added a custom `svg` to handle dark-theme browser, see [instructions](https://web.dev/building-an-adaptive-favicon/)
- In the future we may want to use some `rtl` support (try `$.Site.Language.LanguageDirection "rtl"`)
- We are using [Prettier](https://prettier.io/) to format our code, along with [prettier-plugin-go-template](https://github.com/NiklasPor/prettier-plugin-go-template)
  - Install both globally `npm install -g prettier` & `npm install -g prettier-plugin-go-template` and then run `prettier --write .` to format all the files in the repository
- **PDF** generation happens with [website2pdf](https://github.com/jgazeau/website2pdf). For more details see the _README.md_ inside the _PDF_ folder
- **Search** is handlede with [pagefind](https://pagefind.app/)
  - If `npm install` errors out on _Windows_, consider using the `PowerShell` terminal instead
  - It is build with `just search` and is part of the `just build` command, no manual steps needed
  - During the build, to add image previews to the side of search results, `search = true` is toggled in `config.toml`
  - Durning the build, `hugo` runs in parallel with `pagefind --source public` which creates the `_pagefind` folder inside `/public`

## First time coding?

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
   - [Just](https://github.com/casey/just)

From now on any time you want to work on the website, _with your terminal_:

- enter the project folder `cd utilitarianism.net`, and
- run `hugo serve`
- open `http://localhost:1313/` in your browser (this link will appear in your terminal)

After editing any file (with _VSCode_ or any other text editor) and saving it, the website will automatically refresh with the latest changes 🎉

Feel free to reach out with questions by going to [Issues](https://github.com/whyboris/utilitarianism.net/issues)
