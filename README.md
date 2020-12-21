# ColisncBorne

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

#### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

#### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

#### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

#### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

#### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Docker

#### Build Docker image

Run `ng build --prod --output-path=dist` for a production build. The build artifacts will be stored in the `dist/` directory.

Run `docker build -t colisncborne .`. With the -t argument, we define the name of the image. The second argument (".") defines the location of the Dockerfile. This command can take a while because images have to be downloaded and the angular app has to be compiled.

#### Running Docker container

Run `docker run -p 8080:80 colisncborne`. With -p we define a port mapping. The last argument is the name of the image ("angular") we want to use.

Navigate to `http://localhost:8080/`.