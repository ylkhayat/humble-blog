import { FindArticleDto, FindArticlesDto } from './dto/find-article.dto';
import { CreateArticleDto } from './dto/create-article.dto';
import { ArticleService } from './article.service';
import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article } from './article.entity';

@Controller('articles')
export class ArticleController {
  constructor(private articlesService: ArticleService) {}

  @Post('/')
  create(@Body() article: CreateArticleDto): Promise<Article> {
    return this.articlesService.create(article);
  }

  @Get()
  findAll(@Query() queryObject?: FindArticlesDto): Promise<Article[]> {
    return this.articlesService.findAll(
      queryObject?.query,
      queryObject?.byThumbsUp,
    );
  }

  @Get('/:id')
  findById(@Param() params: FindArticleDto): Promise<Article> {
    const articleId = params.id;
    return this.articlesService.findById(articleId);
  }

  @Put('/:id')
  updateById(
    @Param() params: FindArticleDto,
    @Body() body: UpdateArticleDto,
  ): Promise<Article> {
    const articleId = params.id;
    const thumbsUp = body.thumbsUp;
    return this.articlesService.update(articleId, thumbsUp);
  }
}
