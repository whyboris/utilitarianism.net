# PDF generation

You will need [Node](https://nodejs.org/en/) installed first. Also, the first time you use this system you'll need to run `npm install`. Every time after:

We can generate all the PDFs of every page:

- In `lol.scss` enable the line `@import pdf;`
  - this hides some elements from the print version (e.g. navigation, footer, scroll-to-top arrow)
- Update `glossary.md` replacing every `<details>` to be `<details open>`
- Start the server with `hugo server -D`
- Open a new terminal and enter this directory `cd pdf`
- Run `npm start` to generate all the PDF documents
  - all the PDFs will be in a single folder (`pdf`) inside `public`

## Notes

- To customize the PDF styling, just edit the file `pdf.scss`
