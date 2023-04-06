// This is a hacky script to reorder foonotes chronologically
// Meaning "[^0], [^1], [^1b], [^7], [^4]" will become:
//         "[^1], [^2], [^3], [^4], [^5]"

const fs = require("fs");

const re = /(\[\^[^\]]*])/g;
// regex generates a list (group) of matches of `[^` 
// followed by any number of characters that are NOT `]` 
// and then captures `]` ending the match group
// A resulting array example: ['[^1]', '[^2]', '[^3]']

const FILE_TO_FIX = "../content/types-of-utilitarianism.md";


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
    const renameMap2 = new Map();

    let counter = 1;

    groups.forEach((el) => {
      if (counter <= groups.length / 2) {
        const tempRandom = getRandom()
        renameMap.set(el, tempRandom);
        renameMap2.set(tempRandom, "[^" + counter + "]")
        counter++;
      }
    });

    // console.log(renameMap);
    // console.log(renameMap2);

    renameMap.forEach((value, key, map) => {
      data = data.replaceAll(key, value);      
    });

    renameMap2.forEach((value, key, map) => {
      data = data.replaceAll(key, value);
    });

    // console.log(data)
    writeFile(FILE_TO_FIX, data);
  }

})

crypto = require("crypto");

function getRandom() {
  return crypto.randomBytes(10).toString('hex');
}

function writeFile(path, fileString) {
  fs.writeFile(path, fileString, (err) => {
    if (err) {
      console.log("ERROR !!?!?!");
      console.log(err);
    }
  });
}
