import { CommentService } from './comment.service';
import { Controller, Get, Post } from '@nestjs/common';

@Controller('comments')
export class CommentController {
  constructor(private commentsServices: CommentService) {}

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
