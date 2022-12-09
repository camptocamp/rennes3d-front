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

### Build locally the image

```shell
docker build -t rennes3d-front:latest .
```

### Run the image

```shell
docker run -p 8080:80 rennes3d-front:latest
```

## Deployment of the app

### 1) Image creation

Through Github pipeline, an image is created on every push on 'main' branch, and on each pull request.
The repository for this image can be found here: https://github.com/camptocamp/rennes3d-front/pkgs/container/rennes3d-front/versions

#### On _pull request_

- An image is created, it is tag with 'pr-#' where # is the id of the pull request.

#### On push to the _main_ branch (after a pull request is merge)

- An image is created, it is tag with the short hash of the last commit on main branch.

### 2) Change to the argocd repo

The repository which contains configuration of the argocd of the app is here:
https://github.com/camptocamp/argocd-gs-rennes3d-apps

It is accessible through https://argocd.apps.green.gs-fr-prod.camptocamp.com/ with RedHat c2c account.

#### Set up repo

The argocd [argocd](https://github.com/camptocamp/argocd-gs-rennes3d-apps) and this project must be set up, a private/public key must be generated (ie with openssl).

- This project must have the right to push on the [argocd](https://github.com/camptocamp/argocd-gs-rennes3d-apps) one. The private key must be store in the secret ARGOCD_PRIVATE_KEY for the pipeline to work.
- [argocd](https://github.com/camptocamp/argocd-gs-rennes3d-apps) Must register the public key as "deployment key" in the github configuration.

#### Change the conf

To deploy a new or a different image on the server, you must change the tag of the target image in the configuration of this argocd project.
There are currently three ways of doing it:

1. Manually: change the value in 'apps/dev/vcmap-demo/values.yaml' in the repo, and commit/push the change ;
2. On demand: With [this pipeline](https://github.com/camptocamp/rennes3d-front/actions/workflows/deploy-argocd.yml). Choose the env (currently only dev) and the tag of the image, and let the pipeline change the argocd project ;
3. Automatically: On each merge on main, the pipeline is triggered with the last generated image.

### 3) Deploy on ArgoCD

On: https://argocd.apps.green.gs-fr-prod.camptocamp.com/applications/rennes3d-dev-vcmap-demo

The app must be "OutOfSync" because a new image has been set on the _values.yaml_ file but not deploy yet. Click on sync and wait for the app to be avalaible.

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
