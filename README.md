# Utilitarianism.net

This is a WIP repository that will replace the current _utilitarianism.net_ website. The technology we are using is [*Hugo*](https://gohugo.io/) for its flexibility, speed, ease of use, and _i18n_ (internationalization) support.

## Developing

For detailed instructions if you're new to coding, see the [section below](#first-time-coding)

Short version: make sure you have installed [Hugo](https://gohugo.io/getting-started/installing/) (`0.101.0` or newer) first. After cloning the repository, run `git submodule update --init` to download the themes submodule; this needs to be done only once. After this, just run the server:

```sh
hugo server -D
```

To build the production version of the application just run:

```sh
hugo -D
```

Consult _Hugo_ [documentation](https://gohugo.io/documentation/) if you have trouble, or reach out to Boris with questions.

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

## Internationalization

In the future we may want to use some `rtl` support

```
{{ cond (eq $.Site.Language.LanguageDirection "rtl") "pl4-l" "pr4-l" }}
```

## Notes

- We have a shortcode that will generate the table of contents: `{{< TOC >}}`
- We enabled `unsafe` mode for _Markdown_ to allow [subscript](https://discourse.gohugo.io/t/footnote-sup-tag-not-working-inside-markdownify-help/25426) and other _HTML_ elements (e.g. see the _glossary.md_ file)
- Pages that have the same name as a folder need to be moved into the folder and renamed to `_index.md` to work properly (e.g. `objections-to-utilitarianism`)
  - these use the `list.html` _layout_
- `site-header.html` is unused - meant for homepage only (would include language dropdown)
- _favicon_ generated with [this website](https://realfavicongenerator.net/) & added a custom `svg` to handle dark-theme browser, see [instructions](https://web.dev/building-an-adaptive-favicon/)

## Search

Search is handlede with [pagefind](https://pagefind.app/). You'll need to install [Node](https://nodejs.org/en/) and run `npm install -g pagefind`.

When publishing the application, after `hugo -D` run `pagefind --source public` which will create the `_pagefind` folder inside `/public`. That is all that's needed for search to work. Thank you _pagefind_!

When using site search there are image previews on the side of search results. When generating the search index, toggle `search = true` in `config.toml` so that images appear correctly.

## PDF

We can generate PDFs of all the pages with [website2pdf](https://github.com/jgazeau/website2pdf). See the _README.md_ inside the _PDF_ folder for instructions.

## First time coding?

Starting may be daunting, but you can do it! Setting up will take two steps:

1. Install:
   - [git](https://git-scm.com/)
   - a _terminal_ if you don't have one (on Mac try [Hyper](https://hyper.is), on Windows try [FluentTerminal](https://github.com/felixse/FluentTerminal) or [Terminus](https://github.com/Eugeny/terminus))
   - [Hugo](https://gohugo.io/getting-started/installing/)
   - [VSCode](https://code.visualstudio.com) to easily edit files _(optional)_
2. In your terminal: _note: these steps only need to be done once_
   - _clone_ this repository: `https://github.com/whyboris/utilitarianism.net.git`
   - enter it: `cd utilitarianism.net`
   - install submodules: `git submodule update --init`

From now on any time you want to work on the website, _with your terminal_:

- enter the project folder `cd utilitarianism.net`, and
- run `hugo server -D` 
- open `http://localhost:1313/` in your browser
  
After editing any file (with _VSCode_ or any other text editor) and saving it, the website will automatically refresh with the latest changes 🎉

Feel free to reach out with questions by going to [Issues](https://github.com/whyboris/utilitarianism.net/issues)
