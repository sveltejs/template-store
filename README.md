# svelte app [![Build Status](https://travis-ci.org/sveltejs/template-store.svg?branch=master)](https://travis-ci.org/sveltejs/template-store)

This is a simple demonstration of a [Svelte](https://svelte.technology) app using [svelte/store](https://svelte.technology/guide#state-management). It lives at https://github.com/sveltejs/template-store.

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npm install -g degit # you only need to do this once

degit sveltejs/template-store svelte-app
cd svelte-app
```

*Note that you will need to have [Node.js](https://nodejs.org) installed.*


## Get started

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.


## Deploying to the web

### With [now](https://zeit.co/now)

Install `now` if you haven't already:

```bash
npm install -g now
```

Then, from within your project folder:

```bash
now
```

As an alternative, use the [Now desktop client](https://zeit.co/download) and simply drag the unzipped project folder to the taskbar icon.

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
npm install -g surge
```

Then, from within your project folder:

```bash
npm run build
surge public
```

## End to end testing

Uses [Cypress.io](https://www.cypress.io/) test runner, see [cypress/integration/spec.js](cypress/integration/spec.js). To start the server, run the tests and shut down the server use `npm test` command. To open test runner and run tests with the GUI use `npm run cy:open` command.
