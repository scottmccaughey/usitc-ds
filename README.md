# USITC Design System

Resources, tooling and guidelines for building websites with USITC’s front-end framework.

## Introduction

Our goal is to create a system that enables us to build consistent user experiences with ease, yet with enough flexibility to support the needs of USITC’s different websites and applications. This goal is embedded in our design and code decisions.

This style guide is living documentation that will be updated as we continue to improve and evolve our design system.

## Using the USITC Design System

The USITC Design System is distributed via [npm](https://www.npmjs.com/package/usitc-ds). As the design system grows, it may be split into individual npm packages, but at the present time you’ll need to add the entire system to your project.

After [installing npm](https://docs.npmjs.com/getting-started/installing-node), you can install the USITC Design System with this command:

```bash
npm install --save usitc-ds
```

### SCSS

The style source files included are written in Sass (`scss`).

To use the Sass files, you can point your Sass `include-path` at your `node_modules` directory and import it like this:

```scss
@import 'usitc-ds/src/compiled-assets/scss/styles.scss';
```

This will allow you to take advantage of the Sass functions and variables generated from our design tokens, and use them to write your own styles using our color system, spacing scale, etc.

You can also import specific portions of the code by importing those partials from the `usitc-ds/src/compiled-assets/scss` folder and its subfolders. _Make sure you import any requirements along with these._

### CSS

To use the compiled CSS, you can add this line to your HTML:

```html
<link rel='stylesheet' href='/node_modules/usitc-ds/src/compiled-assets/css/styles.css'>
```

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `npm e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
