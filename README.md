This repo contains Shiftgig JavaScript linting rules. In order to be sharable between apps it's published to the Shiftgig npm org as [@shiftgig/eslint-config](https://www.npmjs.com/package/@shiftgig/eslint-config).

The config is centered around Airbnb defaults with a few rule changes. Many default Airbnb rules are set to warn temporarily while we work on fixing them.

To install in a new app:

`npm install eslint --save-dev`
`npm install @shiftgig/eslint-config`

Then just create a .eslintrc file in the root of your project with:

`{ "extends": ["@shiftgig/eslint-config"] }`

Then you should be able to run `./node_modules/.bin/eslint yourfile.js`

To update the npm package create a PR to master so everyone can review and agree on changes. Then run `npm publish`