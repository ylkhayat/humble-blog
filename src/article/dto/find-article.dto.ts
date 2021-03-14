import { IsNumberString, IsString, IsBoolean } from 'class-validator';

export class FindArticleDto {
  @IsNumberString()
  readonly id: number;
}

export class FindArticlesDto {
  @IsString()
  readonly query: string;

  @IsBoolean()
  readonly byThumbsUp: boolean;
}
