# Utilitarianism.net

Official code for the [_utilitarianism.net_](https://www.utilitarianism.net/) website.

We are using [_Hugo_](https://gohugo.io/) to build the base website and a few _npm packages_ and scripts to generate PDFs and add search functionality.

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
  - [just](https://github.com/casey/just) to orchestrate the build steps

Any time after:

```sh
npm run build
```

Under the hood this will happen:

- Clean the _/public_ folder
- Build the _Search_ index
- Build the _PDF_ files
- Build the final website
- Serve the _/public_ folder for a quick manual check

See `justfile` for details which in turn uses `build.js` to do some of its bidding.

Once the build is finished, you'll get a link to `http://localhost:3000` which will be a local preview of the finished website.

## Adding documents

You can easily import Google Documents via [Docs to Markdown](https://workspace.google.com/u/0/marketplace/app/docs_to_markdown/700168918607). see [archive/README.md](archive/README.md#importing-from-google-docs) for more info.

## Notes

See [archive/README.md](archive/README.md) for more useful information about getting started with or working on this project.
