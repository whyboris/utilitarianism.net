run:
  hugo serve

build:    reset search1 move-en search2 pdf production move-en delete zip serve
build-de: reset search1 move-de search2 pdf production move-de delete zip serve
build-es: reset search1 move-es search2 pdf production move-es delete zip serve
# note the differences:      ^^                             ^^

nopdf: reset search1 move-en search2 production move-en delete zip serve

@reset:
  rm -rf public
  echo ""
  echo "   🚀  emptied /public"
  echo ""

@search1:
  node build.js search
  hugo

@search2:
  npm run search
  node build.js reset
  echo ""
  echo "   🚀  search index generated"
  echo ""

@move-en:
  cp -R public/en/* public
  just move

@move-de:
  cp -R public/de/* public
  just move

@move-es:
  cp -R public/es/* public
  just move

@move:
  rm -rf public/en
  rm -rf public/es
  rm -rf public/de
  echo ""
  echo "   🚀  moved public/en to /public"
  echo ""

@delete:
  rm -rf public/en
  rm -rf public/es
  rm -rf public/de
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
