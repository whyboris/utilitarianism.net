run:
  hugo serve

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
  node build.js reset 
  echo ""
  echo "   🚀  PDF generation finished" 
