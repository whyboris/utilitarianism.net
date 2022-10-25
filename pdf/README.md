# PDF generation

You will need [Node](https://nodejs.org/en/) installed first. Also, the first time you use this system you'll need to run `npm install`. Every time after:

We can generate all the PDFs of every page:

- In `lol.scss` enable the `@import pdf;` to hide some elements from the print version (e.g. navigation, footer, scroll-to-top arrow)
- Start the server with `hugo server -D`
- Open a new terminal and enter this directory `cd pdf`
- Run `npm start` to generate all the PDF documents
