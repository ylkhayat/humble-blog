import { IsNotEmpty, IsNumberString } from 'class-validator';

export class CreateArticleDto {
  @IsNumberString()
  readonly author: number;

  @IsNotEmpty()
  readonly title: string;

  @IsNotEmpty()
  readonly body: string;
}
