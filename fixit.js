// Fix Italics Script
// to fix formatting problems with underscores (italics)
// 
// Update this line:
FILE_TO_FIX = "./content/arguments-for-utilitarianism.md";
//
// run `node fix.js` in your terminal
//
// WARNING: this auto-fix can fail if, for example, 
// some URL in the body of the text has an underscore
// e.g. wikipedia.com/some_article_link
//
// DO NOT EDIT BELOW
// =====================================================

const fs = require("fs");

fs.readFile(FILE_TO_FIX, "utf8", (err, data) => {
  if (err) {
    console.log("ERROR!");
    console.log(err);
    return;
  }

  const num_of_underlines = (data.match(new RegExp("_", "g")) || []).length;
  console.log("Number of underlines:", num_of_underlines);

  if (num_of_underlines % 2 == 0) {

    const temp = data.split("_");

    const finish = [];

    let fixed = 0;

    // The algorithm:
    // if an even string in array ends with a space " " 
    // then remove the space from the end 
    // and prepend it to the next string in array
    for (let i = 0; i < temp.length; i++) {
      if (i % 2 != 0 && temp[i].endsWith(" ")) {
        finish.push(temp[i].slice(0, -1));
        temp[i + 1] = " " + temp[i + 1];
        fixed = fixed + 1;
      } else {
        finish.push(temp[i]);
      }
    }

    if (fixed > 0) {
      console.log("Fixed", fixed, "incorrectly formatted italics!");

      const final = finish.join("_");

      fs.writeFile(FILE_TO_FIX, final, (err) => {
        if (err) {
          console.log("ERROR !!?!?!");
          console.log(err);
        }
      });
    } else {
      console.log("No problems found with _italics_");
    }
  } else {
    console.log("Not an even number of underscores '_' in the document!");
  }
});
