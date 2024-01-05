# DOCX file creation

The book publisher requested `.docx` files of each chapter. These are the instructions and notes.

## Generation

`npm run docx` will generate `.docx` files for each chapter of the book once everything is prepared.

## Preparation

- Install [Pandoc](https://pandoc.org/)
- Copy the folder `img` from `static/img` to the root of the repository
- String replace `<sub>` with `$_{` and `</sub>` with `}$`
  - this uses _LaTeX_ formatting to generate the subscript (occurs in _Population Ethics_ chapter)

### Make these changes but do not commit them to the repository

- String replace `](/img/` with `](./img/` across the codebase
  - e.g. `![Total View](./img/population-ethics-1.png "Total View")`

## Notes

There are two _Pandoc_ scripts that handle formatting:

- Hide all sections that include `{.noexport}`
  - Currently this is every _## Resources and Further Reading_ section
- Hide any paragraph that starts with `{{<` -- _Hugo_ shortcode
  - e.g. `{{< button >}}`
