run:
  hugo serve -D

@search:
  node index.js search && hugo -D && pagefind --source public

@pdf:
  node index.js && hugo serve -D & sleep 3 && cd pdf && npm start && @echo "PDF generation finished" 

