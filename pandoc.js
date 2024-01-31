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
  ["preface.md",                                              "00_preface.docx"],
  // table of contents excluded from docx generation
  // ["textbook.md",                                          "utilitarianism-an-introduction.docx"],
  ["introduction-to-utilitarianism.md",                       "01_introduction-to-utilitarianism.docx"],
  ["elements-and-types-of-utilitarianism.md",                 "02_elements-and-types-of-utilitarianism.docx"],
  ["arguments-for-utilitarianism.md",                         "03_arguments-for-utilitarianism.docx"],
  ["theories-of-well-being.md",                               "04_theories-of-well-being.docx"],
  ["population-ethics.md",                                    "05_population-ethics.docx"],
  ["utilitarianism-and-practical-ethics.md",                  "06_utilitarianism-and-practical-ethics.docx"],
  ["acting-on-utilitarianism.md",                             "07_acting-on-utilitarianism.docx"],
  ["near-utilitarian-alternatives.md",                        "08_near-utilitarian-alternatives.docx"],
  ["objections-to-utilitarianism/_index.md",                  "09_objections-toutilitarianism-and-responses.docx"],
  ["objections-to-utilitarianism/rights.md",                  "10_rights.docx"],
  ["objections-to-utilitarianism/mere-means.md",              "12_mere-means.docx"],
  ["objections-to-utilitarianism/separateness-of-persons.md", "13_separateness-of-persons.docx"],
  ["objections-to-utilitarianism/demandingness.md",           "14_demandingness.docx"],
  ["objections-to-utilitarianism/alienation.md",              "15_alienation.docx"],
  ["objections-to-utilitarianism/special-obligations.md",     "16_special-obligations.docx"],
  ["objections-to-utilitarianism/equality.md",                "17_equality.docx"],
  ["objections-to-utilitarianism/cluelessness.md",            "18_cluelessness.docx"],
  ["objections-to-utilitarianism/abusability.md",             "19_abusability.docx"],
  ["peter-singer-famine-affluence-and-morality.md",           "20_peter-singer-famine-affluence-and-morality.docx"],
  ["resources-and-further-reading.md",                        "21_resources-and-further-reading.docx"],
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
  const input = './content/' + key;
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
