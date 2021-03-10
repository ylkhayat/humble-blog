import { Controller, Get, Post } from '@nestjs/common';

@Controller('articles')
export class ArticlesController {
  @Get('/')
  findAll(): string {
    return 'Hey';
  }

  @Get('/:id')
  findById(): string {
    return 'Hey';
  }

  @Post('/')
  createArticle(): string {
    return 'Hey';
  }
}
