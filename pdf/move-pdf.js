var fs = require("fs");
var path = require("path");

const { fdir } = require("fdir");

console.log("About to move all PDFs into /pdf folder");

// create the builder
const api = new fdir().withFullPaths().crawl("temp");

// get all files in a directory synchronously
const files = api.sync();

const public_pdf =
  __dirname + path.sep + ".." + path.sep + "public" + path.sep + "pdf";

if (!fs.existsSync(public_pdf)) {
  fs.mkdirSync(public_pdf);
}

files.forEach((file) => {
  const filename = path.basename(file);

  const accentsRemoved = filename.replace("ü", "ue")
                                 .replace("ß","ss")
                                 .replace("ä","a")
                                 .replace("“", "")
                                 .replace("„", "")
                                 .replace("ó", "o")
                                 .replace("É", "E")
                                 .replace("é", "e")
                                 .replace("í", "i")

  const newLocation = public_pdf + path.sep + accentsRemoved;

  fs.rename(file, newLocation, function (err) {
    if (err) throw err;
    console.log("SUCCESS:", newLocation);
  });
});
