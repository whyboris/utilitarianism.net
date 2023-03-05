# Book PDF generation

To grab the list of chapters in their proper order, open the `/textbook` URL and run this in the console:

```js
const chapters = document.querySelectorAll(".title-and-description h2")

chapters.forEach((el) => { console.log(el.innerHTML) });
```

Update the `build-book.js` with the list (match formatting you see there), and run `just book` in your terminal!

## Thank you

- Huge thank you to [pdf-merger-js](https://github.com/nbesli/pdf-merger-js) for making merging PDFs so easy!
