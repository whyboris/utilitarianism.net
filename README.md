# Utilitarianism.net

This is a WIP repository that will replace the current _utilitarianism.net_ website. The technology we are using is [*Hugo*](https://gohugo.io/) for its flexibility, speed, ease of use, and _i18n_ (internationalization) support.

### How to start

- _clone_ the repository
- open it with your _terminal_
- run `git submodule update --init` to download the themes submodule

After this, you can always resum from here:

- run `hugo server -D` to develop

### Building

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
- Add the `{{< TOC >}}` to automatically generate the _Table of Contents_
- Update the ` ` (four spaces / code block) to be `>` (quote)
- Update the "how to cite" section with shortcodes `{{< cite-start >}}` and `{{< cite-end >}}`
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