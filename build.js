var fs = require('fs');

const flag = process.argv[2];

const CSS_PATH = './assets/scss/lol.scss';

if (!flag) {

  console.log("this is a script to assist with building the website")
  console.log("ERROR - no flag passed in");

} else if (flag === "reset") {

  const tomlString = getTomlString();

  const newString = setAllFalse(tomlString);

  writeTomlString(newString);

  disablePDFSCSS()

} else if (["search", "pdf", "production"].includes(flag)) {

  const tomlString = getTomlString();
  
  const allFalse = setAllFalse(tomlString);
  
  const newString = allFalse.replace(flag + " = false", flag + " = true");
  
  writeTomlString(newString)

} else {

  console.log("ERROR - you can only pass in 'search', 'pdf', 'production', or 'reset'");

}

if (flag === "pdf") {
  enablePDFSCSS();
}

function enablePDFSCSS() {
  const scssFileString = fs.readFileSync(CSS_PATH, 'utf-8');
  const pdfEnabled = scssFileString.replace("// @import 'pdf';","@import 'pdf';");
  if (scssFileString !== pdfEnabled) {
    fs.writeFileSync(CSS_PATH, pdfEnabled, 'utf-8');
  }
}

function disablePDFSCSS() {
  const scssFileString = fs.readFileSync(CSS_PATH, 'utf-8');
  const pdfDisabled = scssFileString.replace("@import 'pdf';","// @import 'pdf';");
  if (scssFileString !== pdfDisabled) {
    fs.writeFileSync(CSS_PATH, pdfDisabled, 'utf-8');
  }
}

function setAllFalse(incoming) {
  const pdfFalse = incoming.replace("pdf = true", "pdf = false");
  const searchFalse = pdfFalse.replace("search = true", "search = false");
  const allFalse = searchFalse.replace("production = true", "production = false");

  return allFalse;
}

function getTomlString() {
  const tomlString = fs.readFileSync('./config.toml', 'utf-8');

  return tomlString;
}

function writeTomlString(tomlString) {
  fs.writeFileSync('./config.toml', tomlString, 'utf-8');
}
