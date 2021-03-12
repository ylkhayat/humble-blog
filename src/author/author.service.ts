import { CreateAuthorDto } from './dto/create-author.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthorEntity } from './author.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(AuthorEntity)
    private readonly authorRepository: Repository<AuthorEntity>,
  ) {}

  async create(authorData: CreateAuthorDto): Promise<AuthorEntity> {
    const author = new AuthorEntity();
    author.name = authorData.name;
    author.jobTitle = authorData.jobTitle;

    const newAuthor = await this.authorRepository.save(author);
    return newAuthor;
  }

  findById(): any {
    throw new Error('Method not implemented.');
  }
  updateById(): any {
    throw new Error('Method not implemented.');
  }

  findAll(): Promise<Author[]> {
    return this.authorRepository.findAll<Author>();
  }
}
