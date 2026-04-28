# ghost-datatype-support-lib

datatype support lib

designed to provide helper functions for handling filetypes and data types in ts apps

> Template to kickstart creating a Node.js module using TypeScript and VSCode

Inspired by [node-module-boilerplate](https://github.com/sindresorhus/node-module-boilerplate)

## Features

- [Semantic Release](https://github.com/semantic-release/semantic-release)
- [Issue Templates](https://github.com/peterclemenko/ghost-datatype-support-lib/tree/main/.github/ISSUE_TEMPLATE)
- [GitHub Actions](https://github.com/peterclemenko/ghost-datatype-support-lib/tree/main/.github/workflows)
- [Codecov](https://about.codecov.io/)
- [VSCode Launch Configurations](https://github.com/peterclemenko/ghost-datatype-support-lib/blob/main/.vscode/launch.json)
- [TypeScript](https://www.typescriptlang.org/)
- [Husky](https://github.com/typicode/husky)
- [Lint Staged](https://github.com/okonet/lint-staged)
- [Commitizen](https://github.com/search?q=commitizen)
- [Jest](https://jestjs.io/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## Getting started

### Set up your repository

**Click the "Use this template" button.**

Alternatively, create a new directory and then run:

```bash
curl -fsSL https://github.com/peterclemenko/ghost-datatype-support-lib/archive/main.tar.gz | tar -xz --strip-components=1
```

Replace `FULL_NAME`, `GITHUB_USER`, and `REPO_NAME` in the script below with your own details to personalize your new package:

```bash
FULL_NAME="John Smith"
GITHUB_USER="johnsmith"
REPO_NAME="my-cool-package"
sed -i.mybak "s/\([\/\"]\)(ryansonshine)/$GITHUB_USER/g; s/typescript-npm-package-template\|my-package-name/$REPO_NAME/g; s/Ryan Sonshine/$FULL_NAME/g" package.json package-lock.json README.md
rm *.mybak
```

### Add NPM Token

Add your npm token to your GitHub repository secrets as `NPM_TOKEN`.

### Add Codecov integration

Enable the Codecov GitHub App [here](https://github.com/apps/codecov).

[![npm package][npm-img]][npm-url]
[![Build Status][build-img]][build-url]
[![Downloads][downloads-img]][downloads-url]
[![Issues][issues-img]][issues-url]
[![Code Coverage][codecov-img]][codecov-url]
[![Commitizen Friendly][commitizen-img]][commitizen-url]
[![Semantic Release][semantic-release-img]][semantic-release-url]

> My awesome module

## Install

```bash
npm install ghost-datatype-support-lib
```

## Usage

```ts
import { myPackage } from 'ghost-datatype-support-lib';

myPackage('hello');
//=> 'hello from my package'
```

**Scripts**
- **build**: `tsc --project tsconfig.build.json` — Compile TypeScript sources into the `lib/` output directory and generate type declarations.
- **clean**: `rm -rf ./lib/` — Remove previous build artifacts.
- **cm**: `cz` — Run Commitizen for guided commit messages.
- **lint**: `eslint ./src/ --fix` — Run ESLint on `src/` and auto-fix problems where possible.
- **lint:ci**: `eslint ./src --max-warnings 0` — CI-safe lint run that fails on warnings.
- **docs**: `typedoc --options typedoc.json` — Generate TypeDoc documentation into `docs/typedoc`.
- **prepare**: `husky install` — Husky install hook (runs automatically during install).
- **semantic-release**: `semantic-release` — Run semantic-release to publish changelogs and releases.
- **test:watch**: `jest --watch` — Run Jest in watch mode.
- **test**: `jest --coverage` — Run Jest with coverage output.
- **test:mocha**: `mocha -r ts-node/register "test/**/*.mocha.spec.ts" --recursive` — Run Mocha tests written with TypeScript (ts-node).
- **test:lint**: `npm run lint:ci` — Alias to the CI lint command.
- **typecheck**: `tsc --noEmit` — Run TypeScript type checking without emitting files.

## API

### myPackage(input, options?)

#### input

Type: `string`

Lorem ipsum.

#### options

Type: `object`

##### postfix

Type: `string`
Default: `rainbows`

Lorem ipsum.

[build-img]:https://github.com/peterclemenko/ghost-datatype-support-lib/actions/workflows/release.yml/badge.svg
[build-url]:https://github.com/peterclemenko/ghost-datatype-support-lib/actions/workflows/release.yml
[downloads-img]:https://img.shields.io/npm/dt/typescript-npm-package-template
[downloads-url]:https://www.npmtrends.com/typescript-npm-package-template
[npm-img]:https://img.shields.io/npm/v/typescript-npm-package-template
[npm-url]:https://www.npmjs.com/package/typescript-npm-package-template
[issues-img]:https://img.shields.io/github/issues/peterclemenko/ghost-datatype-support-lib
[issues-url]:https://github.com/peterclemenko/ghost-datatype-support-lib/issues
[codecov-img]:https://codecov.io/gh/peterclemenko/ghost-datatype-support-lib/branch/main/graph/badge.svg
[codecov-url]:https://codecov.io/gh/peterclemenko/ghost-datatype-support-lib
[semantic-release-img]:https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]:https://github.com/semantic-release/semantic-release
[commitizen-img]:https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]:http://commitizen.github.io/cz-cli/
