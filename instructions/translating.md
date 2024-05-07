# Translating

How to translate this website into another language:

1) Copy the folder `content/en`
   - it is always the most up-to-date version of the text
2) Delete any pages you do not want to translate (e.g. `books`)
3) Auto-translate using machine translation (to save time and effort)
4) Manually adjust the translation to be a human-made translation
5) Translate the `i18n/en.toml` file into the new-translation language

_Note_: the `slug:` at the top of each file -- this is the _URL_ that the page will live under. Please avoid any [diacritic](https://en.wikipedia.org/wiki/Diacritic) there, please stick to the standard _ASCII_ characters. Otherwise, for example, the _URL_ will not be "Einf**ü**hrung" but instead "Ein%C3%BChrung".

Optionally, after:

1) Paste the files into a folder named after the language's [two-letter abbreviation](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes)
2) Move this folder back to `content`
3) Move the translated `.toml` file into the `i18n` folder
4) Open a _Pull Request_ for this repository

Additionally, if you'd like:

- There are images that need translating in `static/img` folder (see all files that have `.de.` in their name). Please translate the text from those images and share with us so we can create new images for the new language.
