// code from https://williamhuey.github.io/posts/pandoc-filter/

const pandoc = require("pandoc-filter");

// For logging, uncomment everything below:

// const fs = require("fs");
// const outputLogger = new console.Console(fs.createWriteStream("./output.log"));

function action(key) {
  if (key.t == "Para" && key.c[0] && key.c[0].c == "{{<") {
    // outputLogger.log(key.c) for debugging
    return []
  }
}

pandoc.stdio(action);
