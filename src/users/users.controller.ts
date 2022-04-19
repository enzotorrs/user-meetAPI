import { Controller, Get } from '@nestjs/common';
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
}
