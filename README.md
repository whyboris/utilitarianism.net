# Utilitarianism.net

Official code for the [_utilitarianism.net_](https://www.utilitarianism.net/) website.

We are using [_Hugo_](https://gohugo.io/) to build the base website and a few _npm packages_ and scripts to generate PDFs, add search functionality, etc.

## Developing

If you're new to coding, see the [detailed instructions](archive/README.md#first-time-coding).

First time:

- Install [Hugo](https://gohugo.io/getting-started/installing/) (current version is `0.109.0` extended edition)
- Run `git submodule update --init` to download the themes submodule

Any time after:

```sh
hugo serve
```

## Building

First time:

- install [Node](https://nodejs.org/en/)
- run `npm install` which will install:
  - [pagefind](https://pagefind.app) to generate the search index
  - [website2pdf](https://github.com/jgazeau/website2pdf) to generate PDFs
  - [just-install](https://github.com/brombal/just-install) to orchestrate the build steps with [just](https://github.com/casey/just)
  - [bestzip](https://github.com/nfriedly/node-bestzip) to zip the finished files into one
  - [serve](https://github.com/vercel/serve) to preview the final build

Any time after:

```sh
npm run build
```

The `/public` folder now contains all the static files. The `/dist` folder now has the zip of them all: upload to your webhost, unzip, and you are _done_ 🤩

For more details see [archive/README.md](archive/README.md#building)

## Adding documents

You can easily import Google Documents via [Docs to Markdown](https://workspace.google.com/u/0/marketplace/app/docs_to_markdown/700168918607). see [archive/README.md](archive/README.md#importing-from-google-docs) for more info.

## Notes

See [archive/README.md](archive/README.md) for more useful information about getting started with or working on this project.
