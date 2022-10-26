# Rennes 3D

## Quick start

### Run the app in dev mode

```shell
npm i
npm start
```

### Run histoire

```shell
npm run story
```

### Demo

- [histoires](https://camptocamp.github.io/rennes3d-front/main/)

## Docker

### Build the image

```shell
docker build -t rennes3d-front:latest .
```

### Run the image

```shell
docker run -p 8080:80 rennes3d-front:latest
```

### Deploy the image

Credentials are required

```shell
docker tag rennes3d-front:latest rg.fr-par.scw.cloud/gs-platform/rennes3d-front:latest
docker push rg.fr-par.scw.cloud/gs-platform/rennes3d-front:latest
```

Then trash the image in Argocd to deploy the last version.

## Commands

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run build
npm run test:e2e # or `npm run test:e2e:ci` for headless testing
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint:js
```

### Format the code with autofix (eslint + prettier)

```sh
npm run format
```

### Run histoire with Hot-Reload for Development

```sh
npm run story
```
