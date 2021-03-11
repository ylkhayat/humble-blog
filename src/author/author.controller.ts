import { AuthorDto } from './dto/author.dto';
import { AuthorService } from './author.service';
import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';

@Controller('authors')
export class AuthorController {
  constructor(private authorsService: AuthorService) {}

  @Post('/')
  create(@Body() article: AuthorDto): any {
    return this.authorsService.create(article);
  }

  @Get('/')
  findAll(@Query() query: any): any {
    return this.authorsService.findAll();
  }

  @Get('/:id')
  findById(@Param('id') articleId: number): any {
    console.log(articleId);
    return this.authorsService.findById();
  }

  @Put('/:id')
  updateById(
    @Param('id') articleId: number,
    @Body('thumbs_up') thumbsUp: boolean,
  ): any {
    return this.authorsService.updateById();
  }
}
