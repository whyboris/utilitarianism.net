# Utilitarianism.net

Official code for the [_utilitarianism.net_](https://www.utilitarianism.net/) website.

We are using [_Hugo_](https://gohugo.io/) to build the base website and a few _npm packages_ and scripts to generate PDFs, add search functionality, etc.

## Developing

If you're new to coding, see the [detailed instructions](instructions/README.md#first-time-coding).

First time:

- Install [Hugo](https://gohugo.io/getting-started/installing/) (current version is `0.109.0` _extended edition_)
- Run `git submodule update --init` to download the themes submodule

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

## Adding documents

You can easily import Google Documents via [Docs to Markdown](https://workspace.google.com/u/0/marketplace/app/docs_to_markdown/700168918607). see [instructions/README.md](instructions/README.md#importing-from-google-docs) for more info.

## Notes

See [instructions/README.md](instructions/README.md) for more useful information about getting started with or working on this project.

## Thank you

A huge **thank you** to the numerous creators and contributors that make building new things possible, easier, _and_ a pleasure.

**Thank you** to the libraries without which our website would not be possible or would be less than it is now:

- [hugo](https://github.com/gohugoio/hugo) for building the website HTML
- [pagefind](https://pagefind.app) for generating the search index
- [website2pdf](https://github.com/jgazeau/website2pdf) for generating PDFs

**Thank you** to supporting libraries that make the process of building better:

- [just](https://github.com/casey/just) for handle building scripts
- [fdir](https://github.com/thecodrr/fdir) for the fastest way to crawl a directory
- [bestzip](https://github.com/nfriedly/node-bestzip) for zipping the finished files into one
- [serve](https://github.com/vercel/serve) for previewing the final build

This is not a complete list, there are too many others to list 🙇‍♂️

[^1]: If you see a Pagefind [Error: tar xvf exited with 128](https://github.com/CloudCannon/pagefind/issues/66#issuecomment-1237313541) try using _Powershell_
