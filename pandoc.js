// Please read `book/README.md` to prepare for the script to work

const nodePandoc = require('node-pandoc');

// -------------------------------
// make sure `docx` folder exists:
var fs = require('fs');
var dir = './docx';
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}
// -------------------------------
// Pandoc interaction callback:
const callback = function(err, result) {
  if (err) {
    console.error('Oh Nos: ', err);
  }

  console.log(result);
  return result; // true
};
// -------------------------------

// taken from `build-book.js` and modifed to work
const chapters = [
  ["table-of-contents.md",                                    "00_toc.docx"],
  ["foreword.md",                                             "00_foreword.docx"],
  ["preface.md",                                              "00_preface.docx"],
  // table of contents excluded from docx generation
  // ["textbook.md",                                          "utilitarianism-an-introduction.docx"],
  ["01-introduction-to-utilitarianism.md",                    "01_introduction-to-utilitarianism.docx"],
  ["02-types-of-utilitarianism.md",                           "02_elements-and-types-of-utilitarianism.docx"],
  ["03-arguments-for-utilitarianism.md",                      "03_arguments-for-utilitarianism.docx"],
  ["04-theories-of-wellbeing.md",                             "04_theories-of-well-being.docx"],
  ["05-population-ethics.md",                                 "05_population-ethics.docx"],
  ["06-utilitarianism-and-practical-ethics.md",               "06_utilitarianism-and-practical-ethics.docx"],
  ["acting-on-utilitarianism.md",                             "07_acting-on-utilitarianism.docx"],
  ["07-near-utilitarian-alternatives.md",                     "08_near-utilitarian-alternatives.docx"],
  ["objections-to-utilitarianism/_index.md",                  "09_objections-to-utilitarianism-and-responses.docx"],
  ["objections-to-utilitarianism/01-rights.md",                  "10_rights.docx"],
  ["objections-to-utilitarianism/02-mere-means.md",              "11_mere-means.docx"],
  ["objections-to-utilitarianism/03-separateness.md",            "12_separateness-of-persons.docx"],
  ["objections-to-utilitarianism/04-demandingness.md",           "13_demandingness.docx"],
  ["objections-to-utilitarianism/05-alienation.md",              "14_alienation.docx"],
  ["objections-to-utilitarianism/06-special-obligations.md",     "15_special-obligations.docx"],
  ["objections-to-utilitarianism/07-equality.md",                "16_equality.docx"],
  ["objections-to-utilitarianism/08-cluelessness.md",            "17_cluelessness.docx"],
  ["objections-to-utilitarianism/09-abusability.md",             "18_abusability.docx"],
  ["conclusion.md",                                           "19_conclusion.docx"],
  ["peter-singer-famine-affluence-and-morality.md",           "20_peter-singer-famine-affluence-and-morality.docx"],
  ["09-resources-and-further-reading.md",                     "21_resources-and-further-reading.docx"],
]

const chapterMap = new Map(chapters);

const args = ['-f', 'markdown+raw_tex',
              '--filter=./book/hide-hugo.js',
              '--lua-filter=./book/noexport-subtrees.lua',
              '-t', 'docx', '-o'];

// pretty print -- just for fun
const addTabSpaces = (input) => {
  const numOfTabs = Math.floor((input.length + 1) / 8);
  return "\t".repeat(Math.max(8 - numOfTabs), 1);
}

chapterMap.forEach((value, key) => {
  const input = './content/en/' + key;
  const output = './docx/' + value;
  const command = args.concat(output)
  console.log(input, addTabSpaces(input), "\t-->\t", value);
  nodePandoc(input, command, callback);
});

// -------------------------------
// single file testing, for debug:
// -------------------------------
// const input = './test.md';
// const output = './out.docx';
// const test = args.concat(output);
// nodePandoc(input, test, callback);
