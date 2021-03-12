import { CreateAuthorDto } from './dto/create-author.dto';
import { AuthorService } from './author.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('authors')
export class AuthorController {
  constructor(private authorService: AuthorService) {}

  @Post('/')
  create(@Body() author: CreateAuthorDto): any {
    return this.authorService.create(author);
  }

  @Get('/')
  findAll(): any {
    return this.authorService.findAll();
  }

  @Get('/:id')
  findById(@Param('id') authorId: number): any {
    return this.authorService.findById(authorId);
  }
}
