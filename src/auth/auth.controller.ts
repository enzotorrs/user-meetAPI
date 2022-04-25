import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
    ){}

    @UseGuards(LocalGuard)
    @Post('login')
    async login(@Request() req){
        return this.authService.login(req.user);
    }
}
