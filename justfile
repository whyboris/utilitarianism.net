run:
  hugo serve

build: clean search pdf production zip serve

@clean:
  rm -rf public
  echo "   🚀  cleaned /public"

@search:
  node build.js search
  hugo
  npm run search
  node build.js reset
  echo ""
  echo "   🚀  Search index generated"

@pdf:
  node build.js pdf
  hugo serve & sleep 2
  npm run pdf
  node build.js pdfreset
  node build.js reset
  npm run kill-hugo
  echo ""
  echo "   🚀  PDF generation finished"

@production:
  node build.js production
  hugo
  node build.js reset
  echo ""
  echo "   🚀  Production build finished"

@zip:
  rm -rf dist
  mkdir dist
  node build.js zip
  echo ""
  echo "   🚀  Zipping build to /dist finished"

@serve:
  echo "   🔎  Preview the final website:"
  npm run public
