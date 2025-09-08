# Angular Beer Route Workshop


-How was this built?

npm install -g @angular/cli
ng new first-app --no-standalone

ng generate service beers

ng generate module beers
ng generate component beers/add
ng generate component beers/view
ng generate component beers/list


ng generate module layout
ng generate component layout/menu

Order of Build:

- run above `ng serve`
- arrange app-routing.module.ts
- should be able to see menu and navigate around site!
- create model folder with a beer interface
- create data folder with an array of beers!
- add beers array to beers.service.ts, importing - the beer interface, beer data collection
- list component: import car service into here and fill a Pets array property with it . Setup constructor correctly
- create add in service to add to beers array and - make id increment
- create FORM !


This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

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
