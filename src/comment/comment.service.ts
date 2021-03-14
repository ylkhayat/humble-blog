import { COMMENT_REPOSITORY } from './../constants';
import { Article } from './../article/article.entity';
import { CreateCommentDto } from './dto/create-comment.dto';
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Comment } from './comment.entity';
import { getRepository, Repository } from 'typeorm';
@Injectable()
export class CommentService {
  constructor(
    @Inject(COMMENT_REPOSITORY)
    private readonly commentsRepository: Repository<Comment>,
  ) {}

  async create(commentData: CreateCommentDto): Promise<Comment> {
    const comment = new Comment();
    comment.body = commentData.body;
    const article = await getRepository(Article).findOne(commentData.article);
    if (!article)
      throw new HttpException(
        "Couldn't find the article",
        HttpStatus.NOT_FOUND,
      );

    comment.article = article;

    const newComment = await this.commentsRepository.save(comment);
    return newComment;
  }

  async findAll(): Promise<Comment[]> {
    return await this.commentsRepository.find();
  }

  async findById(commentId: number): Promise<Comment> {
    const comment = await this.commentsRepository.findOne(commentId, {
      relations: ['article'],
    });
    if (!comment)
      throw new HttpException(
        "Couldn't find the comment",
        HttpStatus.NOT_FOUND,
      );
    return comment;
  }
}
