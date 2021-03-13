# Humble Blog 📑

As mentioned in the description, this repository is an implementation for a blog about articles and authors, allowing random thumbs up to be given to articles and basic listing/creation of both articles and authors.

Used framework is [NestJS](https://github.com/nestjs/nest) along with [TypeORM](https://typeorm.io/#/).

## Description

This is a very brief README.md to provide guidance and for the reader to know his/her way through the application.
Before we proceed, here are a couple of references I followed in order to follow a clean and community like convention:

- 📦 [ArturKisov/nestjs-mysql-starter](https://github.com/ArturKisov/nestjs-mysql-starter)
- 📦 [lujakob/nestjs-realworld-example-app](https://github.com/lujakob/nestjs-realworld-example-app)

### Let's Get Started

You can either use the **dockerized** version of the application or try it out in the wild.
In both cases, you will need the `.env` set inorder for this experience to be complete. You can follow the `.env.copy` to know which enviroment variables are expected.

#### 🐳 Embarking Docker

```bash
$ docker-compose up
```

#### 🏝️ Prefering the shore

First install the dependencies

```bash
$ yarn
```

Then proceed with the basic launch

```bash
$ yarn start
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Testing Functionalities

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

Nest is [MIT licensed](LICENSE).
