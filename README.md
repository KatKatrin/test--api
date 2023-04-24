## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
# install npm packages
$ npm install

```

### Environment variables

Copy contents of the `.env.example` to the `.env` file in the project root. Edit the variables according to your local environment or leave them as they are.

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```

## Swagger

This API is documented using Swagger.After running API you can find the Swagger documentation at
http://${host}:${port}/api#/

Example: http://localhost:3000/api#/

## Building docker image

```bash
# for windows
$ docker build -f .\Docker\Dockerfile .
```
