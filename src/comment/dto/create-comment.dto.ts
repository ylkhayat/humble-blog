import { IsNotEmpty, IsNumberString } from 'class-validator';

export class CreateCommentDto {
  @IsNotEmpty()
  readonly body: string;

  @IsNumberString()
  readonly article: string;
}
