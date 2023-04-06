// This is a hacky script to reorder foonotes chronologically
// Meaning "[^0], [^1], [^1b], [^7], [^4]" will become:
//         "[^1], [^2], [^3], [^4], [^5]"

const fs = require("fs");

const re = /(\[\^[^\]]*])/g;
// regex generates a list (group) of matches of `[^` 
// followed by any number of characters that are NOT `]` 
// and then captures `]` ending the match group
// A resulting array example: ['[^1]', '[^2]', '[^3]']

const FILE_TO_FIX = "../content/introduction-to-utilitarianism.md";


fs.readFile(FILE_TO_FIX, "utf8", (err, data) => {
  if (err) {
    console.log("ERROR!");
    console.log(err);
    return;
  }

  const groups = data.match(re);
  // console.log(groups);

  if (!!(groups.length % 2)) {
    console.log("ERROR: there is not a matching number of footnote links and footnotes! Script ABORTED!");
  } else {

    const renameMap = new Map();

    let counter = groups.length / 2;

    groups.reverse().forEach((el) => {
      if (counter > 0) {
        renameMap.set(el, "[^" + counter + "]");
        counter--;
      }
    });

    // console.log(renameMap);

    let before = data;

    renameMap.forEach((value, key, map) => {
      before = before.replaceAll(key, value);      
    });

    writeFile(FILE_TO_FIX, before);
  }

})

function writeFile(path, fileString) {
  fs.writeFile(path, fileString, (err) => {
    if (err) {
      console.log("ERROR !!?!?!");
      console.log(err);
    }
  });
}
