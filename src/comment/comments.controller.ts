import { CommentsService } from './comments.service';
import { Controller, Get, Post } from '@nestjs/common';

@Controller('comments')
export class CommentsController {
  constructor(private commentsServices: CommentsService) {}

  // @Post('/:id')
  // createComment(): any {
  //   this.commentsServices.createComment();
  // }

  // @Get('/')
  // findAll(): any {
  //   this.commentsServices.findAll();
  // }

  // @Get('/:id')
  // findById(): any {
  //   return this.commentsServices.findById();
  // }
}
