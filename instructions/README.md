# Instructions

This folder contains instructions for people new to coding, tips for cleaning markdown files imported from _Google Docs_, some old notes, and more details about building the application.

## Table of Contents

- [First time coding](#first-time-coding)
- [Importing from Google Docs](#importing-from-google-docs)
- [Miscellaneous Notes](#miscellaneous-notes)
- [How builds are generated](#how-builds-are-generated)
- [Languages](#languages--translations)

## First time coding

Starting may be daunting, but you can do it! Setting up will take some steps, but if you follow these in order it should be mostly surprise-free:

### Setting up

Below steps need to be done only once:

1. Install [git](https://git-scm.com/)
   - When installing, just click "_next_" through the default-selected options, no need to worry about any of them
   - This will automatically install _Git Bash_, a _terminal_ for executing commands

_Please read:_ **Terminal** is a tool you use to make your computer execute commands (anything formatted `this way` below is a command you run in your terminal). There are many terminals to choose from:
   - _Mac_: you can use the default _terminal_ that comes with the OS
      - or consider [Hyper](https://hyper.is)
   - _Windows_: you can use _Git Bash_ which is installed when you install _git_ or _Powershell_ that is part of the OS
      - or consider [FluentTerminal](https://github.com/felixse/FluentTerminal) or [Tabby](https://github.com/Eugeny/tabby))
      - if some installation below fails, you may need to try the command using _Powershell_
         - _unlikely_, but if you see an error about "administrator" something, try running _Powershell_ as an _administrator_ (right-click the icon in the _Start_ menu and "Run as administrator")

2. Install [Hugo](https://gohugo.io/getting-started/installing/)
   - _Mac_:
      - Install [brew](https://brew.sh/), then
      - `brew install hugo`
   - _Windows_:
      - _Scoop_ (recommended)
         - Install [Scoop](https://scoop.sh/), then
         - `scoop install hugo-extended@0.124.0`
      - _Chocolatey_ (alternative)
         - Install [Chocolatey](https://chocolatey.org/), then
         - `choco install hugo-extended --version=0.124.0`
3. Install [Just](https://github.com/casey/just)
   - _Mac_: `brew install just`
   - _Windows_: `scoop install just`
4. Install [VSCode](https://code.visualstudio.com) _(step optional)_
   - This is the nicest way to edit files
5. _Last steps_ 🎉 all in your terminal:
   - _navigate_ to a folder where you would like your code to be located
      - this is done with the command `cd` followed by `..` to go up a directory or a folder name to enter it
      - for example `cd ..`, `cd ..` to go up twice, and then `cd code` to enter the folder with the name "code"
      - _Windows_: consider creating a folder _C:\code_ to put all your code for ease of finding later
      - you can also use the _tab_ key on your keyboard to auto-complete a folder name
   - _clone_ this repository by running `git clone https://github.com/whyboris/utilitarianism.net.git`
   - enter the folder: `cd utilitarianism.net`

### Developing

From now on any time you want to work on the website, _with your terminal_:

1. enter the project folder (_navigate_ to the folder _utilitarianism.net_ on your computer with your terminal)
2. run `hugo serve` with your terminal
3. open `http://localhost:1313/` in your browser (this link will appear in your terminal)

After editing any file (with _VSCode_ or any other text editor) and saving it, the website will automatically refresh with the latest changes 🎉

### Building

To _build_ the website (generating all the files needed) we'll install just one more tool:

_Only once:_

1. Install [Node](https://nodejs.org/en/)
2. enter the project folder with your terminal
3. run `npm install`[^1]

_Every time after:_

Run `npm run build` in your terminal.

This should generate the search index, all the PDFs, and run a server to preview the final result. Additionally, this script puts the finished build into a _zip_ file inside the _dist_ folder to transfer to our webhost.

Feel free to reach out with questions by creating an _Issue_ in this project's [Issues](https://github.com/whyboris/utilitarianism.net/issues) page.

## Importing from Google Docs

You can easily import Google Documents via [Docs to Markdown](https://workspace.google.com/u/0/marketplace/app/docs_to_markdown/700168918607) (see [documentation](https://github.com/evbacher/gd2md-html/wiki)).

After adding a document it will likely need some manual fixes:

- Update the metadata section (first few lines, see other files for reference)
- If you install the [MarkdownLint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) in your _VSCode_, you may save some time: right-click and "Format Document"
- The article will likely have formatting errors with _italics_ (_underscores_), so open the `fixit.js` file (in `scripts` folder), update the `FILE_TO_FIX` string, and execute: `node fixit.js`
  - _note_ rather than jumping through below hoops, just use **MarkdownLint** (see instructions below)
  - _note_ the `fixit.js` file is meant to be executed from the root of the repository (in `/` not in `/archive` where it resides) - so temporarily move it there if you use it.
  - it may be best to temporarily remove the _Resources and Further Reading_ and _Footnotes_ during this operation
  - alternatively you can render the HTML as is and _Ctrl+F_ (find) `_` on the page and manually update
- Add the `{{< TOC >}}` to automatically generate the _Table of Contents_
- Update the four spaces indentations to be `>` (quote)
- Remove the "## How to cite" heading and replace the entire citation with `{{< how-to-cite >}}`
  - if the authors are not "MacAskill, W., Meissner, D., and Chappell, R.Y." then add `authors: "author name(s)"` to _front matter_ (top of the file)
- Add the _Action_ button shortcode `{{< button >}}`
- If a footnote was multi-paragraph, add the indentation so the text stays with the footnote (rather than being rendered to the page at the bottom)
- Look over the document for any other manual fixes
- Consider adding [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) for catching some spelling mistakes.

## Miscellaneous Notes

- Consult _Hugo_ [documentation](https://gohugo.io/documentation/) if you have trouble, or reach out to Boris with questions.
- We have a shortcode that will generate the table of contents: `{{< TOC >}}`
- _Front matter_ includes `authors: ` which will be used in the _"How to Cite This Page"_ section of each page.
  - if the field is absent, the default three authors will be listed
- We enabled `unsafe` mode for _Markdown_ to allow [subscript](https://discourse.gohugo.io/t/footnote-sup-tag-not-working-inside-markdownify-help/25426) and other _HTML_ elements (e.g. see the _glossary.md_ file)
- Pages that have the same name as a folder need to be moved into the folder and renamed to `_index.md` to work properly (e.g. `objections-to-utilitarianism`)
  - these use the `list.html` _layout_
- _favicon_ is generated with [this website](https://realfavicongenerator.net/)
- There is also a custom `svg` _favicon_ to handle dark-theme browser, see [instructions](https://web.dev/building-an-adaptive-favicon/)
- `site-header.html` is unused - meant for homepage only (it may one day include a language dropdown)
- In the future we may want to use some `rtl` support (try `$.Site.Language.LanguageDirection "rtl"`)
- We have used [Prettier](https://prettier.io/) along with the [prettier-plugin-go-template](https://github.com/NiklasPor/prettier-plugin-go-template) to format our code, but it creates some edits that need to then be manually reverted
  - To execute, run `npm run prettier` but please manually confirm that no errors snuck in.
    - One example is `\_` after _Animal Liberation_ book links - which breaks underlining (not what we want)
    - The `.` is moved to the next line in _how to cite_ resulting in a space before the period
    - Some footnotes get indented incorrectly; even though the page and notes display correctly after, this isn't great
    - other minor things
  - The main benefit of having this installed, is that in _VS Code_ you can right-click and _format_ all the `.html` files now.

## How builds are generated

- **PDF** generation happens with [website2pdf](https://github.com/jgazeau/website2pdf).
  - For more details see the [PDF/README.md](../pdf/README.md) file.
- **Search** is handlede with [pagefind](https://pagefind.app/)
  - If `npm install` errors out on _Windows_, consider using the `PowerShell` terminal instead
  - It is build with `just search` and is part of the `just build` command, no manual steps needed
  - During the build, to add image previews to the side of search results, `search = true` is toggled in `config.toml`
  - Durning the build, `hugo` runs in parallel with `pagefind --site public` which creates the `pagefind` folder inside `/public`
- If you run _hugo_ and see the warning _"port 1313 already in use, attempting to use an available port"_ try `npm run kill-hugo` which is equivalent to [`npx kill-port 1313`](https://github.com/tiaanduplessis/kill-port)

When you run the `npm run build` script, under the hood we'll use `just` to execute these in order:

- Clean the _/public_ folder
- Build the _Search_ index
- Build the _PDF_ files
- Build the final website
- Zip the _/public_ directory into a single file in _/dist_
- Serve the _/public_ folder for a quick manual check

See `justfile` for details; notice it uses `build.js` to do some of its bidding.

Once the build is finished, you'll get a link in your terminal (to `http://localhost:3000`) which will be a local preview of the finished website. Please spot-check it to make sure it functions as expected (for example: search works & PDFs exist).

## Languages / Translations

All languages are accessible during development, each has its own link when you run `npm start`. When you are ready to build the public website (with all the search & PDF capabilities) in a particular language, run the associated command:

- English: `just build`
- German: `just build-de`
- Spanish: `just build-es`

_Note:_ PDF filenames in German have some replacements: `ü` -> `ue`, `ß` -> `ss`, `ä` -> `a`, `ó` -> `o`, `É` -> `E`, `é` -> `e`, `í` -> `i`, `á` -> `a`; while `“` & `„` are removed -- all so that PDFs are accessible when the link is clicked. See `move-pdf.js` and `PDF.html` (both of which need identical replacement rules).

### Audio

Until the audio is ready and set up, we can set `hideAudio` to be true in `config.toml`

```toml
    [languages.es.params]
      hideAudio = true
```

### Bibliography

For our _Spanish_ version of the website, we generate citations with `hugo-cite` automatically, but we need the `bib` file:

Copy [stable.bib](https://github.com/tlon-team/babel-refs/tree/main/bib) to your computer and use `pandoc` to convert `stable.bib` to `bib.json` with this command:

```sh
pandoc stable.bib -t csljson -o bib.json
```

Place the file in `/assets`, and run `npm run fix-bib` which will generate `bib2.json` for easier use by our system.

We used the code from [hugo-cite](https://github.com/loup-brun/hugo-cite). Just these two files were copied from the above repository and `cite.html` was modified heavily for our use case:

- `layouts/shortcodes/cite.html`
- `layouts/partials/bibliography/apa-style.html`

Citations originally came from _TLON_ as `[@Singer1972]`; we can search and replace `\[@(.+?)\]` _RegEx_ with `{{< cite $1 >}}` and then fix any page references (e.g. after the citation shortcode include any string `"chap. 3"`)

[^1]: If you see an error while Pagefind is being installed, something like [Error: tar xvf exited with 128](https://github.com/CloudCannon/pagefind/issues/66#issuecomment-1237313541) try using _Powershell_ when running `npm install`
