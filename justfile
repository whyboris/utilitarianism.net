run:
  hugo serve

build: clean search pdf production move delete zip serve

nopdf: clean search production move delete zip serve

@clean:
  rm -rf public
  echo ""
  echo "   🚀  cleaned /public"
  echo ""

@search:
  node build.js search
  hugo
  just move
  npm run search
  node build.js reset
  echo ""
  echo "   🚀  search index generated"
  echo ""

@move:
  cp -R public/en/* public
  rm -rf public/en
  echo ""
  echo "   🚀  moved public/en to /public"
  echo ""

@delete:
  rm -rf public/de
  rm -rf public/en
  rm -rf public/es
  rm -rf public/docx
  echo ""
  echo "   🚀  removed extra folders from /public"
  echo ""

@pdf:
  node build.js pdf
  hugo serve & sleep 2
  npm run pdf
  node build.js pdfreset
  node build.js reset
  npm run kill-hugo
  echo ""
  echo "   🚀  PDF generation finished"
  echo ""

@production:
  node build.js production
  hugo --minify
  node build.js reset
  echo ""
  echo "   🚀  Production build finished"
  echo ""

@zip:
  rm -rf dist
  mkdir dist
  node build.js zip
  echo ""
  echo "   🚀  Zipping build to /dist finished"
  echo ""

@serve:
  echo ""
  echo "   🔎  Preview the final website:"
  echo ""
  npm run public

@book:
  node build.js pdf
  node build.js bookpdf
  hugo serve & sleep 2
  npm run book-pdf
  node build.js pdfreset
  node build.js reset
  npm run kill-hugo
  echo ""
  echo "   🚀  Book PDF generation finished"
  echo ""
