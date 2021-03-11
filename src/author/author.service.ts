import { AuthorDto } from './dto/author.dto';
import { Inject, Injectable } from '@nestjs/common';
import { Author } from './author.entity';

@Injectable()
export class AuthorService {
  constructor(
    @Inject(AUTHORS_REPOSITORY) private authorsRepository: typeof Author,
  ) {}

  create(body: AuthorDto): Promise<Author> {
    return this.authorsRepository.create({
      name: 'Eric',
      reputation: 150,
    });
  }
  findById(): any {
    throw new Error('Method not implemented.');
  }
  updateById(): any {
    throw new Error('Method not implemented.');
  }

  findAll(): Promise<Author[]> {
    return this.authorsRepository.findAll<Author>();
  }
}
