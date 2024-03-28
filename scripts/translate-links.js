/*

Replace all English links with language-specific links.

This is partially a manual process:

1) Start Hugo server. This will result in all languages rendered on different ports
2) Open the book table of contents for both languages (two tabs in your browser)
3) Open developer tools on both tabs, navigate to "console"
4) Paste the following snippet into both:

```
var array = [];
var links = document.getElementById("TableOfContents").getElementsByTagName("a");
for(var i=0, max=links.length; i<max; i++) {
    array.push(links[i].href);
}
console.log(array)
```

5) Press enter, and you should see an array of links
6) Right-click and `Copy object`
7) Paste it into this file
8) Do the same on the translated page
9) Note: when you navigate to the next page,
         you can click the Up arrow which will auto-fill the code snippet into your console,
         letting you easily repeat the copy/paste across all pages

While this process is annoying (about 20 pages for each language), the rest will be automated:

When this document is filled out with all the links, you can then run:

```
node translate-links.js
```

which will replace all the links with correct ones 🥳

Afterwards, you'll want to grab pairs like this one:

```
let en1 = [
    "https://utilitarianism.net/introduction-to-utilitarianism/"
]
let de1 = [
    "/einfuhrung-in-den-utilitarismus"
]
```

And then re-run it again with the last slash `/` removed (from English)

toggle `preview` to see all links that include `utilitarianism.net`
otherwise the script will use the translation map to replace strings

*/

const PREVIEW = true;

const SCAN_DIRECTORY = "./content/de"

// Chapters
let en1 = []
let de1 = []
let en2 = []
let de2 = []
let en3 = []
let de3 = []
let en4 = []
let de4 = []
let en5 = []
let de5 = []
let en6 = []
let de6 = []
let en7 = []
let de7 = []
let en8 = []
let de8 = []
let en9 = []
let de9 = []

// Objections
let eno1 = []
let deo1 = []
let eno2 = []
let deo2 = []
let eno3 = []
let deo3 = []
let eno4 = []
let deo4 = []
let eno5 = []
let deo5 = []
let eno6 = []
let deo6 = []
let eno7 = []
let deo7 = []
let eno8 = []
let deo8 = []
let eno9 = []
let deo9 = []

// acting on U

let ena = []
let dea = []

let enChapters = [...en1, ...en2, ...en3, ...en4, ...en5, ...en6, ...en7, ...en8, ...en9]
let deChapters = [...de1, ...de2, ...de3, ...de4, ...de5, ...de6, ...de7, ...de8, ...de9]
let enObjections = [...eno1, ...eno2, ...eno3, ...eno4, ...eno5, ...eno6, ...eno7, ...eno8, ...eno9]
let deObjections = [...deo1, ...deo2, ...deo3, ...deo4, ...deo5, ...deo6, ...deo7, ...deo8, ...deo9]

let english = [...enChapters, ...enObjections, ...ena]
let german =  [...deChapters, ...deObjections, ...dea]

let zip = (a1, a2) => a1.map((x, i) => [x, a2[i]]);

let finalPairs = zip(english, german)
let finalMap = new Map(finalPairs)

// console.log(finalMap)

var fs = require("fs");

const { fdir } = require("fdir");

const markdownLinkExtractor = require('markdown-link-extractor');

const api = new fdir().withFullPaths().crawl(SCAN_DIRECTORY);

const files = api.sync();

// console.log(files)

let allFound = []

function writeFile(path, fileString) {
  fs.writeFile(path, fileString, (err) => {
    if (err) {
      console.log("ERROR writing!");
      console.log(err);
    } else {
      console.log('file written:', path);
    }
  });
}

function readAndWrite(file_to_fix) {
  fs.readFile(file_to_fix, "utf8", (err, data) => {
    if (err) {
      console.log("ERROR reading!");
      console.log(err);
      return;
    }

    const links = markdownLinkExtractor(data);

    links.forEach((link) => {

      if (PREVIEW) {
        if (link.includes("utilitarianism.net")) {
          allFound.push(link);
        }
      } else {
        if (finalMap.has(link)) {
          data = data.replace(link, finalMap.get(link));
        }
      }

    })

    if (!PREVIEW) {
      writeFile(file_to_fix, data)
    }
  });
}

// for testing: try just one file
// readAndWrite(files[0])

if (PREVIEW) {
  setTimeout(() => {
    const sorted = allFound.sort()
    console.log(sorted)
  }, 2000);
} else {
  files.forEach((file) => {
    readAndWrite(file)
  })
}
