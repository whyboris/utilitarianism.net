# DOCX file creation

The book publisher requested `.docx` files of each chapter. These are the instructions and notes.

## Generation

`npm run docx` will generate `.docx` files for each chapter of the book once everything is prepared.

## Preparation

- Install [Pandoc](https://pandoc.org/)
- Copy the folder `img` from `static/img` to the root of the repository
- String replace `<sub>` with `$_{` and `</sub>` with `}$`
  - this uses _LaTeX_ formatting to generate the subscript (occurs in _Population Ethics_ chapter)

### Already complete

- Add `{.noexport}` to every section to exclude from the book
  - e.g. `## Resources and Further Reading {.noexport}`
- Replace `/img/` with `./img/` for each image
  - e.g. `![Total View](./img/population-ethics-1.png "Total View")`

## Notes

There are two _Pandoc_ scripts that handle
