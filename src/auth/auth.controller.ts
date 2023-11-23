import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/createUser.dto';

@ApiTags('Авторизация')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/reg')
  registration(@Body() authDto: CreateUserDto) {
    return this.authService.registration(authDto)
  }

  @Post('/login')
  login(@Body() authDto: AuthDto) {
    return this.authService.login(authDto);
  }
}
