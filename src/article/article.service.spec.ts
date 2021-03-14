import { ArticleService } from './article.service';
import { Comment } from './../comment/comment.entity';
import { ArticleModule } from './article.module';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from '../author/author.entity';
import { Article } from './article.entity';
import { INestApplication } from '@nestjs/common';
import * as supertest from 'supertest';
import { Repository } from 'typeorm';

describe('Article Service', () => {
  let app: INestApplication;
  let articlesService: ArticleService;
  let authorsRepository: Repository<Author>;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ArticleModule,
        TypeOrmModule.forRoot({
          type: 'mysql',
          database: 'humble_blog_e2e_test',
          entities: [Author, Article, Comment],
          synchronize: true,
        }),
      ],
    }).compile();

    app = module.createNestApplication();
    articlesService = module.get(ArticleService);
    await app.init();
  });

  afterEach(async () => {
    // await articlesRepository.query(`DELETE FROM articles;`);
  });

  afterAll(async () => {
    await app.close();
  });

  describe('POST /articles', () => {
    it('should return an array of articles', async (done) => {
      await articlesService.authorsRepository?.save([
        { name: 'testing-agent-1', jobTitle: 'testing-job-1' },
      ]);

      const { body } = await supertest(app)
        .post('/articles')
        .send({
          title: 'test-title-1',
          body: 'test-body-1',
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(404, done);
      console.log({ body });

      // expect(body).toEqual([
      //   { id: expect.any(Number), name: 'test-name-0' },
      //   { id: expect.any(Number), name: 'test-name-1' },
      // ]);
    });
  });

  afterAll(async () => {
    await app?.close();
  });
});
