const PDFMerger = require('pdf-merger-js');

var path = require("path");

console.log("About to Generate Book PDFs inside the /pdf folder");

const public_pdf =
  __dirname + path.sep + ".." + path.sep + "public" + path.sep + "pdf" + path.sep;

var merger = new PDFMerger();

(async () => {
  await merger.add(public_pdf + "Introduction_to_Utilitarianism_utilitarianism_net.pdf");
  await merger.add(public_pdf + "Elements_and_Types_of_Utilitarianism_utilitarianism_net.pdf");
  await merger.add(public_pdf + "Arguments_for_Utilitarianism_utilitarianism_net.pdf");
  await merger.add(public_pdf + "Theories_of_Well_Being_utilitarianism_net.pdf");
  await merger.add(public_pdf + "Population_Ethics_utilitarianism_net.pdf");
  await merger.add(public_pdf + "Utilitarianism_and_Practical_Ethics_utilitarianism_net.pdf");
  await merger.add(public_pdf + "Near_Utilitarian_Alternatives_utilitarianism_net.pdf");
  await merger.add(public_pdf + "Objections_to_Utilitarianism_and_Responses_utilitarianism_net.pdf");
  await merger.add(public_pdf + "The_Rights_Objection_utilitarianism_net.pdf");
  await merger.add(public_pdf + "The_Mere_Means_Objection_utilitarianism_net.pdf");
  await merger.add(public_pdf + "The_Separateness_of_Persons_Objection_utilitarianism_net.pdf");
  await merger.add(public_pdf + "The_Demandingness_Objection_utilitarianism_net.pdf");
  await merger.add(public_pdf + "The_Alienation_Objection_utilitarianism_net.pdf");
  await merger.add(public_pdf + "The_Special_Obligations_Objection_utilitarianism_net.pdf");
  await merger.add(public_pdf + "The_Equality_Objection_utilitarianism_net.pdf");
  await merger.add(public_pdf + "Resources_and_Further_Reading_utilitarianism_net.pdf");

  await merger.save('An Introduction to Utilitarianism - Richard Yetter Chappell, Darius Meissner, and William MacAskill.pdf');
})();
