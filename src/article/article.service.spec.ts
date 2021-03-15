import { ArticleService } from './article.service';
import { Test, TestingModule } from '@nestjs/testing';

jest.useFakeTimers();

class ApiServiceMock {}

describe('Article Service', () => {
  let app: TestingModule;
  let articlesService: ArticleService;

  beforeAll(async () => {
    const ApiServiceProvider = {
      provide: ArticleService,
      useClass: ApiServiceMock,
    };

    app = await Test.createTestingModule({
      imports: [ArticleService],
      providers: [ArticleService, ApiServiceProvider],
    }).compile();
    articlesService = app.get<ArticleService>(ArticleService);
  });

  afterEach(async () => {});

  afterAll(async () => {
    await app.close();
  });

  describe('Create Article', () => {
    it('should create an article', async () => {
      const createdService = await articlesService.create({
        author: 1,
        body: 'test-body-1',
        title: 'test-title-1',
      });
      console.log(createdService);
    });
  });

  afterAll(async () => {
    await app?.close();
  });
});
