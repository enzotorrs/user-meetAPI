import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { LocalGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
    @UseGuards(LocalGuard)
    @Post('login')
    async login(@Request() req){
        return req.user;
    }
}
