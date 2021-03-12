import { AuthorDto } from './dto/author.dto';
import { AuthorService } from './author.service';
import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';

@Controller('authors')
export class AuthorController {
  constructor(private authorService: AuthorService) {}

  @Post('/')
  create(@Body() article: AuthorDto): any {
    return this.authorService.create(article);
  }

  @Get('/')
  findAll(@Query() query: any): any {
    return this.authorService.findAll();
  }

  @Get('/:id')
  findById(@Param('id') articleId: number): any {
    console.log(articleId);
    return this.authorService.findById();
  }

  @Put('/:id')
  updateById(
    @Param('id') articleId: number,
    @Body('thumbs_up') thumbsUp: boolean,
  ): any {
    return this.authorService.updateById();
  }
}
