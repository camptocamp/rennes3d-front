FROM node:16-alpine AS build

COPY package.json package-lock.json /app/
WORKDIR /app
RUN npm ci
COPY . /app
RUN npm run build

FROM httpd:2-buster AS run
WORKDIR /usr/local/apache2/htdocs/
COPY --from=build /app/dist/ .
