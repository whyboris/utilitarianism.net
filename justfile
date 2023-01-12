run:
  hugo serve

build: search pdf production

@search:
  node build.js search
  hugo
  pagefind --source public
  echo ""
  echo "   🚀  Search index generated"

@pdf:
  node build.js pdf
  hugo serve & sleep 2
  cd pdf && npm start
  node build.js pdfreset
  echo ""
  echo "   🚀  PDF generation finished"

@production:
  node build.js production
  hugo
  node build.js reset
  echo ""
  echo "   🚀  Production build finished"
