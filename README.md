# Utilitarianism.net

This is a WIP repository that will replace the current _utilitarianism.net_ website. The technology we are using is [*Hugo*](https://gohugo.io/) for its flexibility, speed, ease of use, and _i18n_ (internationalization) support.

### Developing

For detailed instructions if you're new to coding, see the [section below](#if-youve-not-coded-but-want-to-start)

Make sure you have installed [Hugo](https://gohugo.io/getting-started/installing/) first. After cloning the repository, run `git submodule update --init` to download the themes submodule; this needs to be done only once. After this, just run the server:

```sh
hugo server -D
```

To build the production version of the application just run:

```sh
hugo -D
```

### Adding documents

All the pages were imported from Google Documents via [Docs to Markdown](https://workspace.google.com/u/0/marketplace/app/docs_to_markdown/700168918607) (see [documentation](https://github.com/evbacher/gd2md-html/wiki)).

After adding a document it will likely need some manual fixes:
- Update the metadata section (first few lines, see other files for reference)
- It will likely have formatting errors with _italics_ (_underscores_), so open the `fixit.js` file, update the `FILE_TO_FIX` string, and execute: `node fixit.js`
    - it may be best to temporarily remove the _Resources and Further Reading_ and _Footnotes_ during this operation
    - alternatively you can render the HTML as is and _Ctrl+F_ (find) `_` on the page and manually update
- Add the `{{< TOC >}}` to automatically generate the _Table of Contents_
- Update the ` ` (four spaces / code block) to be `>` (quote)
- Remove the "## How to cite" heading and replace the entire citation with `{{< how-to-cite >}}`
    - if the authors are not "MacAskill, W., Meissner, D., and Chappell, R.Y." then do `{{< how-to-cite authors="your authors" >}}`
- Add the _Action_ button shortcode `{{< button >}}`
- If a footnote was multi-paragraph, add the indentation so the text stays with the footnote (rather than being rendered to the page at the bottom)
- Look over the document for any other manual fixes

### Internationalization

In the future we may want to use some `rtl` support
```
{{ cond (eq $.Site.Language.LanguageDirection "rtl") "pl4-l" "pr4-l" }}
```

#### Notes
We have a shortcode that will generate the table of contents: `{{< TOC >}}`
We enabled `unsafe` mode for _Markdown_ to allow [subscript](https://discourse.gohugo.io/t/footnote-sup-tag-not-working-inside-markdownify-help/25426)


### If you've not coded but want to start:

1. Starting may be daunting, but you can do it!
   - install **git**
   - install a _terminal_ if you don't have one (on Mac try [Hyper](https://hyper.is), on Windows try [FluentTerminal](https://github.com/felixse/FluentTerminal) or [Terminus](https://github.com/Eugeny/terminus))
   - install [Hugo](https://gohugo.io/getting-started/installing/)
2. When done, _clone_ this repository, enter it (`cd utilitarianism.net`) and install submodules (`git submodule update --init`).
3. Install [VSCode](https://code.visualstudio.com) and open the folder to see the code.
4. Start (`hugo server -D`) 🎉

Feel free to reach out with questions by going to [Issues](https://github.com/whyboris/utilitarianism.net/issues)
