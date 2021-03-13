import { CommentService } from './comment.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';

@Controller('comments')
export class CommentController {
  constructor(private commentService: CommentService) {}

  @Post('/')
  create(@Body() comment: CreateCommentDto) {
    return this.commentService.create(comment);
  }

  @Get('/')
  findAll(): any {
    return this.commentService.findAll();
  }

  @Get('/:id')
  findById(@Param('id') commentId: number): any {
    return this.commentService.findById(commentId);
  }
}
