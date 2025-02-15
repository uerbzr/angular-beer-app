# Angular Beer Application

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.6.

## Setup

- after forking/cloning run `npm install`

## Running

- inside the src/app/beers/data directory run `json-server --watch beers.json`
- To start a local development server, run `ng serve`
- Navigate to `http://localhost:4200/`.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

## To create this project

- ng generate module layout
- ng generate component layout/menu
- ng generate module beers
- ng generate service beers
- ng generate component beers/add
- ng generate component beers/edit
- ng generate component beers/list
- ng generate component beers/view

## Additional Packages

- `npm install bootstrap` and modified a section in the angular.json file:

```json
 "styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.css"
            ],
            "scripts": [
              "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
            ]
```

## Help

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
