const nodePandoc = require('node-pandoc');

// -------------------------------
// make sure `docx` folder exists:
var fs = require('fs');
var dir = './docx';
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}
// -------------------------------

const input = './content/types-of-utilitarianism.md';

const args = ['-f', 'markdown', '-t', 'docx', '-o'];

const output = './docx/out.docx';

args.push(output);

const callback = function(err, result) {
  if (err) {
    console.error('Oh Nos: ', err);
  }

  console.log(output, result);
  return result; // true
};

// Call pandoc
nodePandoc(input, args, callback);
