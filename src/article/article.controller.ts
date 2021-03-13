import { CreateArticleDto } from './dto/create-article.dto';
import { ArticleService } from './article.service';
import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';

@Controller('articles')
export class ArticleController {
  constructor(private articlesService: ArticleService) {}

  @Post('/')
  create(@Body() article: CreateArticleDto): any {
    return this.articlesService.create(article);
  }

  @Get('/')
  findAll(@Param('query') query: any): any {
    return this.articlesService.findAll(query);
  }

  @Get('/:id')
  findById(@Param('id') articleId: number): any {
    return this.articlesService.findById(articleId);
  }

  @Put('/:id')
  updateById(
    @Param('id') articleId: number,
    @Body('thumbsUp') thumbsUp: boolean,
  ): any {
    return this.articlesService.update(articleId, thumbsUp);
  }
}
