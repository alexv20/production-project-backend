import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {

  @ApiProperty({example: 'test@test.ru', description: 'email'})
  readonly email: string;

  @ApiProperty({example: 'user007', description: 'unique username'})
  readonly username: string;

  @ApiProperty({example: 'qwerty123', description: 'password'})
  readonly password: string;
}
