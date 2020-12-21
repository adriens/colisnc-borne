# ColisncBorne
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.2.

### Development server
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

### Clone project
Clone `colisnc-borne` project locally abd install the dependencies.
```
git clone https://github.com/adriens/colisnc-borne.git
cd colisnc-borne
npm install
```

### Build Docker image
Run production build in project directory. The build artifacts will be stored in the `dist/` directory.
```
ng build --prod --output-path=dist
``` 

Build `colisnc-borne` image with the -t argument to define the name of the image. 
The second argument (".") defines the location of the Dockerfile. 
This command can take a while because images have to be downloaded and the angular app has to be compiled.
```
docker build -t colisnc-borne .
```

### Pulling Docker image
Pull `colisnc-api` image with `lastest` tag.
```
docker pull rastadidi/colisnc-api:latest
``` 

### Running Docker
Once the images are built or pulled.

#### Running Docker Container
Run `colisnc-api` image with -p to define a port mapping.
```
docker run -d -p 8080:8080 rastadidi/colisnc-api:latest
```

Run `colisnc-borne` image with -p to define a port mapping.
```
docker run -d -p 8081:8080 colisnc-borne
```

Navigate to `http://localhost:8081/`.

#### Running Docker Compose
Run containers in the background.
```
docker-compose up -d
docker ps
```