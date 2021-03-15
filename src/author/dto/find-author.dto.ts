import {
  IsNumberString,
  IsString,
  IsOptional,
  IsBooleanString,
} from 'class-validator';

export class FindArticleDto {
  @IsNumberString()
  readonly id: number;
}

export class FindArticlesDto {
  @IsString()
  @IsOptional()
  readonly query: string;

  @IsBooleanString()
  @IsOptional()
  readonly byThumbsUp: boolean;
}
