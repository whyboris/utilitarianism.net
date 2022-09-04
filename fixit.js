// Fix Italics Script
// to fix formatting problems with underscores (italics)
// 
// Update this line:
FILE_TO_FIX = "./content/objections-to-utilitarianism/alienation.md";
// change to `false` to actually write the file
PREVIEW = true
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

        // preview of what is getting fixed
        console.log('_' + temp[i].slice(0, -1) + '_');

      } else {
        finish.push(temp[i]);
      }
    }

    if (fixed > 0) {
      
      const final = finish.join("_");
      
      if (!PREVIEW) {
        writeFile(FILE_TO_FIX, final);
        console.log("Fixed", fixed, "likely incorrectly formatted italics!");
      } else {
        console.log("Found", fixed, "likely incorrectly formatted italics!");
        console.log(" ")
        console.log("To apply these changes, update the `PREVIEW` variable in this file and run the script again!")
      }

    } else {
      console.log("No problems found with _italics_");
    }
  } else {
    console.log("Not an even number of underscores '_' in the document!");
  }
});

function writeFile(path, fileString) {

  fs.writeFile(path, fileString, (err) => {
    if (err) {
      console.log("ERROR !!?!?!");
      console.log(err);
    }
  });

}