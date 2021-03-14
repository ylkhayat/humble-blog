import { IsBoolean } from 'class-validator';

export class UpdateArticleDto {
  @IsBoolean()
  readonly thumbsUp: boolean;
}
