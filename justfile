run:
  hugo serve

build: clean search pdf production zip serve

nopdf: clean search production zip serve

@clean:
  rm -rf public
  echo ""
  echo "   🚀  cleaned /public"
  echo ""

@search:
  node build.js search
  hugo
  npm run search
  node build.js reset
  echo ""
  echo "   🚀  Search index generated"
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
