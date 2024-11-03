import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('register')
  async register(@Body('email') email: string, @Body('password') password: string) {
    await this.userService.register(email, password);
    return { message: 'Registration successful' };
  }
}
