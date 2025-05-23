run:
  hugo serve

build: build-en

build-en: reset search1 move-en search2 pdf-en production move-en2 zip serve
build-de: reset search1 move-de search2 pdf-de production move-de2 zip serve
build-es: reset search1 move-es search2 pdf-es production move-es2 zip serve
build-pt: reset search1 move-pt search2 pdf-pt production move-pt2 zip serve
# note the differences:      ^^             ^^                 ^^

nopdf:    reset search1 move-en search2        production move-en2 zip serve

minimal:  reset search1 move-en search2        production move-en2     serve

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

# see bug: https://github.com/casey/just/issues/1985

@move-en2:
  just move-en

@move-de2:
  just move-de

@move-es2:
  just move-es

@move-pt2:
  just move-pt

@move-en:
  cp -R public/en/* public
  just delete

@move-de:
  cp -R public/de/* public
  just delete

@move-es:
  cp -R public/es/* public
  just delete

@move-pt:
  cp -R public/pt/* public
  just delete

@delete:
  rm -rf public/en
  rm -rf public/es
  rm -rf public/de
  rm -rf public/pt
  echo ""
  echo "   🚀  removed extra folders from /public"
  echo ""

@pdf-en:
  cp pdf/w2pdf_template/footer.en.html pdf/w2pdf_template/footer.html
  just pdf pdf-en

@pdf-de:
  cp pdf/w2pdf_template/footer.de.html pdf/w2pdf_template/footer.html
  just pdf pdf-de

@pdf-es:
  cp pdf/w2pdf_template/footer.es.html pdf/w2pdf_template/footer.html
  just pdf pdf-es

@pdf-pt:
  cp pdf/w2pdf_template/footer.es.html pdf/w2pdf_template/footer.html
  just pdf pdf-pt

@pdf script:
  node build.js pdf
  hugo serve & sleep 2
  npm run {{script}}
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
