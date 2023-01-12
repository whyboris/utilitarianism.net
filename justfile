run:
  hugo serve -D

@search:
  node build.js search && hugo -D && pagefind --source public

@pdf:
  node build.js pdf && hugo serve -D & sleep 3 && cd pdf && npm start && @echo "PDF generation finished" 

