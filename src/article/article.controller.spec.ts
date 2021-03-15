import { ArticleModule } from './article.module';
import { Test, TestingModule } from '@nestjs/testing';
import { ArticleController } from './article.controller';

describe('ArticleController', () => {
  let controller: ArticleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ArticleModule],
    }).compile();
    controller = module.get<ArticleController>(ArticleController);
  });

  describe('Create an article', () => {
    it('should return the created article', async () => {
      // expect(
      //   await controller.create({
      //     author: 1,
      //     body: 'Test Body',
      //     title: 'Test Title',
      //   }),
      // ).toBe(result);
    });
  });

  describe('Find all articles', () => {
    it('should return an array of articles', async () => {
      const result: any[] = [{}];
      jest.spyOn(controller, 'findAll').mockImplementation(async () => result);
      expect(await controller.findAll()).toBe(result);
    });
  });

  describe('Find an article by id', () => {
    it('should return an article by id', async () => {
      const result: any = {};

      jest.spyOn(controller, 'findById').mockImplementation(async () => result);
      // expect(await controller.findById()).toBe(result);
    });
  });

  describe('Update an article', () => {
    it('should return the updated article', async () => {
      const result: any = {};

      jest
        .spyOn(controller, 'updateById')
        .mockImplementation(async () => result);
      // expect(await controller.updateById()).toBe(result);
    });
  });
});
