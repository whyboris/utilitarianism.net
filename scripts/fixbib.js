var fs = require('fs');

var obj = JSON.parse(fs.readFileSync('assets/bib.json', 'utf8'));

console.log("bib.json is an array:", Array.isArray(obj));

const bibRefs = new Map();

obj.forEach(element => {
  delete element.abstract;
  bibRefs.set(element.id, element);
});

fs.writeFile('assets/bib2.json', JSON.stringify(Object.fromEntries(bibRefs)), (error) => {
  if (error) throw error;
  console.log('succesfully created bib2.json');
});
