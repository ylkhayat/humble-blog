import { ArticleDto } from './dto/article.dto';
import { ArticlesService } from './article.service';
import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';

@Controller('articles')
export class ArticlesController {
  constructor(private articlesService: ArticlesService) {}

  @Post('/')
  create(@Body() article: ArticleDto): any {
    // return this.articlesService.create();
  }

  @Get('/')
  findAll(@Query() query: any): any {
    // return this.articlesService.findAll();
  }

  @Get('/:id')
  findById(@Param('id') articleId: number): any {
    console.log(articleId);
    // return this.articlesService.findById();
  }

  @Put('/:id')
  updateById(
    @Param('id') articleId: number,
    @Body('thumbs_up') thumbsUp: boolean,
  ): any {
    // return this.articlesService.updateById();
  }
}
