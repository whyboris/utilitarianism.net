var fs = require('fs');

const flag = process.argv[2];

if (!flag) {

  console.log("ERROR - no flag passed in");

} else if (flag === "reset") {

  const tomlString = getTomlString();

  const newString = setAllFalse(tomlString);

  writeTomlString(newString);

} else if (["search", "pdf", "production"].includes(flag)) {

  const tomlString = getTomlString();
  
  const allFalse = setAllFalse(tomlString);
  
  const newString = allFalse.replace(flag + " = false", flag + " = true");
  
  writeTomlString(newString)

} else {

  console.log("ERROR - you can only pass in 'search', 'pdf', 'production', or 'reset'");

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
