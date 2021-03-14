import { DatabaseModule } from '../database/database.module';
import { Module } from '@nestjs/common';
import { AuthorController } from './author.controller';
import { AuthorService } from './author.service';
import { authorProviders } from './author.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [AuthorController],
  providers: [AuthorService, ...authorProviders],
})
export class AuthorModule {}
