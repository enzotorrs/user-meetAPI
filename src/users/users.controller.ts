import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService,
    ){}

    @Get()
    async getAllUsers(): Promise<User[]> {
        return await this.usersService.findAllUsers()
    }

    @Get(':username')
    async getUserByName(@Param('username') username: string): Promise<User>{
        return await this.usersService.findByUsername(username)
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    async saveUser(@Body() user: User): Promise<User> {
        const newUser = await this.usersService.saveUser(user);
        return newUser;
    }
}
