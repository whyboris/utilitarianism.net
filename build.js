var fs = require("fs");

const flag = process.argv[2];

const CSS_PATH = "./assets/scss/lol.scss";
const GLOSSARY_PATH = "./content/glossary.md";

if (flag === "pdf") {
  enablePDFSCSS();
  openAllGlossary();
}

if (!flag) {
  console.log("This is a script to assist with the building of the website");
  console.log("Please use `just` to build");
} else if (flag == "zip") { 
  zipFullWebsite();
} else if (flag === "pdfreset") {
  disablePDFSCSS();
  closeAllGlossary();
} else if (flag === "reset") {
  const tomlString = getTomlString();
  const allFalse = setAllFalse(tomlString);
  writeTomlString(allFalse);
} else if (["search", "pdf", "production"].includes(flag)) {
  const tomlString = getTomlString();
  const allFalse = setAllFalse(tomlString);
  const flagEnabled = allFalse.replace(flag + " = false", flag + " = true");
  writeTomlString(flagEnabled);
} else {
  console.log(
    "ERROR - you can only pass in 'search', 'pdf', 'pdfreset', 'production', 'reset', or 'zip'"
  );
}

function openAllGlossary() {
  const glossaryString = fs.readFileSync(GLOSSARY_PATH, "utf-8");
  const allOpen = glossaryString.replaceAll("<details>","<details open>");
  fs.writeFileSync(GLOSSARY_PATH, allOpen, "utf-8");
}

function closeAllGlossary() {
  const glossaryString = fs.readFileSync(GLOSSARY_PATH, "utf-8");
  const allClosed = glossaryString.replaceAll("<details open>","<details>");
  fs.writeFileSync(GLOSSARY_PATH, allClosed, "utf-8");
}

function enablePDFSCSS() {
  const scssFileString = fs.readFileSync(CSS_PATH, "utf-8");
  const pdfEnabled = scssFileString.replace(
    "\n// @import 'pdf';",
    "\n@import 'pdf';"
  );
  if (scssFileString !== pdfEnabled) {
    fs.writeFileSync(CSS_PATH, pdfEnabled, "utf-8");
  }
}

function disablePDFSCSS() {
  const scssFileString = fs.readFileSync(CSS_PATH, "utf-8");
  const pdfDisabled = scssFileString.replace(
    "\n@import 'pdf';",
    "\n// @import 'pdf';"
  );
  if (scssFileString !== pdfDisabled) {
    fs.writeFileSync(CSS_PATH, pdfDisabled, "utf-8");
  }
}

function setAllFalse(incoming) {
  const pdfFalse = incoming.replace("pdf = true", "pdf = false");
  const searchFalse = pdfFalse.replace("search = true", "search = false");
  const allFalse = searchFalse.replace(
    "production = true",
    "production = false"
  );

  return allFalse;
}

function getTomlString() {
  const tomlString = fs.readFileSync("./config.toml", "utf-8");

  return tomlString;
}

function writeTomlString(tomlString) {
  fs.writeFileSync("./config.toml", tomlString, "utf-8");
}

function zipFullWebsite() {
  const zip = require('bestzip');

  const dateToday = new Date().toISOString().slice(0, 10);

  zip({
    cwd: 'public',
    source: '*',
    destination: '../dist/' + dateToday + '.zip'
  }).then(function() {
    // console.log('all done!');
  }).catch(function(err) {
    console.log("Zipping directory failed!");
    console.error(err.stack);
    process.exit(1);
  });
}
