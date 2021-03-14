import { Author } from './author.entity';
import { AuthorService } from './author.service';
import { Test, TestingModule } from '@nestjs/testing';
import { AuthorController } from './author.controller';

describe('AuthorController', () => {
  let authorsService: AuthorService;
  let authorsController: AuthorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthorController],
      providers: [AuthorService],
    }).compile();

    authorsService = module.get<AuthorService>(AuthorService);
    authorsController = module.get<AuthorController>(AuthorController);
  });

  describe('Finding all authors', () => {
    it('should return an array of authors', async () => {
      const author1: Author = {
        id: 1,
        name: 'Eric Valentine',
        jobTitle: 'CEO, of Everything',
        createdAt: new Date(),
        updatedAt: new Date(),
        articles: [],
      };
      const author2: Author = {
        id: 1,
        name: 'Joey Vergoro',
        jobTitle: 'CEO, of Nothing',
        createdAt: new Date(),
        updatedAt: new Date(),
        articles: [],
      };
      const result = [author1, author2];
      jest
        .spyOn(authorsService, 'findAll')
        .mockImplementation(async () => result);
      expect(await authorsController.findAll()).toBe(result);
    });
  });
});
