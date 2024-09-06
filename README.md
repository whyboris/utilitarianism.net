# Utilitarianism.net

Official code for [_utilitarianism.net_](https://www.utilitarianism.net/) and its translations:

| Language | Website |
| -------- | ------- |
| English  | [utilitarianism.net](https://utilitarianism.net) |
| German   | [utilitarismus.net](https://utilitarismus.net) |
| Spanish  | [utilitarismo.net](https://utilitarismo.net) |

To add a translation, please reach out to us and then follow the [recommended instructions](instructions/translating.md).

## Developing

We are using [_Hugo_](https://gohugo.io/) to build the base website and a few _npm packages_ and scripts to generate PDFs, add search functionality, etc.

If you're new to coding, see the [detailed instructions](instructions/README.md#first-time-coding).

First time:

- Install [Hugo](https://gohugo.io/getting-started/installing/) (current version is `0.134.0` _extended edition_)

Any time after:

```sh
hugo serve
```

## Building

First time:

- install [Node](https://nodejs.org/en/)
- install [just](https://github.com/casey/just)
- run `npm install`[^1]

Any time after:

```sh
npm run build
```

The `/public` folder now contains all the static files. The `/dist` folder now has the zip of them all: upload to your webhost, unzip, and you are _done_ 🤩

For more details see [instructions/README.md](instructions/README.md#building)

## Notes

See [instructions/README.md](instructions/README.md) for more useful information about getting started with or working on this project.

## Thank you

A huge **thank you** to the numerous creators and contributors that make building new things possible, easier, _and_ a pleasure.

**Thank you** to the libraries without which our website would not be possible or would be less than it is now:

- [hugo](https://github.com/gohugoio/hugo) for building the website HTML
- [pagefind](https://pagefind.app) for generating the search index
- [website2pdf](https://github.com/jgazeau/website2pdf) for generating PDFs

**Thank you** to supporting libraries that make the process of building better:

- [theme/ananke](https://github.com/theNewDynamic/gohugo-theme-ananke) for being the starting theme of this Hugo project
- [just](https://github.com/casey/just) for handling building scripts
- [fdir](https://github.com/thecodrr/fdir) for the fastest way to crawl a directory
- [bestzip](https://github.com/nfriedly/node-bestzip) for zipping the finished files into one
- [serve](https://github.com/vercel/serve) for previewing the final build
- [hugo-cite](https://github.com/loup-brun/hugo-cite) for making citations easy to work with

This is not a complete list, there are too many others to list 🙇‍♂️

[^1]: If you see a Pagefind [Error: tar xvf exited with 128](https://github.com/CloudCannon/pagefind/issues/66#issuecomment-1237313541) try using _Powershell_
