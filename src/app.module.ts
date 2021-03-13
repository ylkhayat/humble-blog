import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorModule } from './author/author.module';
import { ArticleModule } from './article/article.module';
import { CommentModule } from './comment/comment.module';
import { Connection } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({ autoLoadEntities: true }),
    AuthorModule,
    ArticleModule,
    CommentModule,
  ],
})
export class AppModule {
  constructor(private readonly _: Connection) {}
}
