# Humble Blog 📑

As mentioned in the description, this repository is an implementation for a blog concerned with articles and authors, allowing random thumbs up to be given to articles and basic listing/creation of both articles and authors.

Used framework is [NestJS](https://github.com/nestjs/nest) along with [TypeORM](https://typeorm.io/#/).

## Description

This is a very brief README.md to provide guidance and for the reader to know his/her way through the application.

Before we proceed, here are some of references I followed in order to ensure a clean and a community-like convention:

- 📦 [ArturKisov/nestjs-mysql-starter](https://github.com/ArturKisov/nestjs-mysql-starter)
- 📦 [lujakob/nestjs-realworld-example-app](https://github.com/lujakob/nestjs-realworld-example-app)

### Setup & running the application

You can either use the **dockerized** version of the application or try it out in the wild.
In both cases, you will need the `.env` set inorder for this experience to be complete. You can follow the `.env.copy` to know which enviroment variables are expected.

#### 📸 Clone the repository

Start-off by cloning the repository from [GitHub CLI](https://cli.github.com/)

```bash
$ gh repo clone yousseftarekkh/humble-blog
```

```bash
$ cd humble-blog
```

#### 🏃‍♂️ Run the application

You can choose between using the `docker` way or the normal way.

##### 🐳 Embarking Docker

If everything is setup as it should, the application should run smoothly after the following command.

```bash
$ docker-compose up
```

##### 🏝️ Prefering the shore

First install the dependencies

```bash
$ yarn
```

Then proceed with the basic launch

```bash
$ yarn start
```

### Inspecting the content

Expected functionalities and available APIs are exposed over [📰 here !!](http://localhost:3000/api/#/) once the application is online using [Swagger](https://swagger.io/).

#### 🪐 Architecture of the models

##### Author

```ts
class Author {
  name: string;
  jobTitle: string;
  thumbsUp: number;
  articles: Article[];
}
```

##### Article

```ts
class Article {
  title: string;
  body: string;
  thumbsUp: number;
  author: Author;
}
```

##### Comment

```ts
class Comment
 {
  body: string;
  article: Article;
}
```

#### 🎪 Architecture of the API

- 🖋️ **Authors** - `/authors`
  - [`POST /authors` Create Author](http://localhost:3000/api/#/default/AuthorController_create) - creates an author
    - _body:_ `name` (**string**) - name of the author
    - _body:_ `jobTitle` (**string**) - his/her job title
  - [`GET /authors` List Authors](http://localhost:3000/api/#/default/AuthorController_findAll) - lists all authors
  - [`GET /authors/:id` Preview Author](http://localhost:3000/api/#/default/AuthorController_findById) - preview an author by id
- 📃 **Articles** - `/articles`
  - [`POST /articles` Create Article](http://localhost:3000/api/#/default/ArticleController_create) - creates an article
    - _body:_ `author` (**string**) - id of the author
    - _body:_ `body` (**string**) - content of the article
    - _body:_ `title` (**string**) - title of the article
  - [`GET /articles` List Articles](http://localhost:3000/api/#/default/ArticleController_findAll) - lists all articles here's a list of supported params
    - _params:_ `query` (**string**) - offer a general search over the `title` and the `body`
    - _params:_ `byThumbsUp` (**boolean**) - offer a sorting listing by the `thumbsUp` property
  - [`GET /articles/:id` Preview Article](http://localhost:3000/api/#/default/ArticleController_findById) - preview an article by id
  - [`PUT /articles/:id` Update Article](http://localhost:3000/api/#/default/ArticleController_updateById) - updates a certain article by id
    - _body:_ `thumbsUp` (**boolean**) - boolean to give the article a kudos 👍
- 🗯️ **Comments** - `/comments`
  - [`POST /comments` Post Comment](http://localhost:3000/api/#/default/CommentController_create) - posts a comment to a certain article by id
    - _body:_ `article` (**string**) - id of the article
    - _body:_ `body` (**string**) - content of the comment
  - [`GET /comments` List Comments](http://localhost:3000/api/#/default/CommentController_findAll) - lists all comments

### Testing Functionalities

![made-with-Markdown](https://img.shields.io/static/v1?label=implementation&message=pending&color=critical)

All the mentioned functionalities are tested through `*.spec` files. You may run the following command to perform a quick checkup over the APIs to ensure their functionality.

```bash
$ yarn test
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

Nest is [MIT licensed](LICENSE).
