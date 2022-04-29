import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtSuperUserGuard } from 'src/auth/guards/Jwt-superuser.guard';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService,
    ) { }

    @Get()
    async getAllUsers(): Promise<User[]> {
        return await this.usersService.findAllUsers()
    }

    @Get(':username')
    async getUserByName(@Param('username') username: string): Promise<User> {
        return await this.usersService.findByUsername(username)
    }

    @UseGuards(JwtSuperUserGuard)
    @Post()
    async saveUser(@Body() user: User): Promise<User> {
        const newUser = await this.usersService.saveUser(user);
        return newUser;
    }

    @UseGuards(JwtSuperUserGuard)
    @Delete(':id')
    async deleteUserById(@Param('id') id: number): Promise<User> {
        const userDeleted = await this.usersService.deleteUserById(id);
        return userDeleted;
    }

    @UseGuards(JwtSuperUserGuard)
    @Put()
    async updateUserById(@Body() user: User) {
        const userUpdated = await this.usersService.updateUser(user);
        return userUpdated;
    }
}
