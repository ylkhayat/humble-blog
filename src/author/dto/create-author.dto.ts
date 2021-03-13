import { IsNotEmpty } from 'class-validator';

export class CreateAuthorDto {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly jobTitle: string;
}
