import { DatabaseModule } from './../../database/database.module';
import { CommentController } from './comment.controller';
import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { commentProviders } from './comment.providers';

@Module({
  imports: [DatabaseModule],
  providers: [CommentService, ...commentProviders],
  controllers: [CommentController],
})
export class CommentModule {}
