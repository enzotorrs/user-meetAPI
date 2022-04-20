import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
    ){}

    async validateUser(username: string, pass: string){
        const user = await this.usersService.findByUsername(username);
        if(user && pass === user.password){
            const {password, ...result} = user;
            return result
        }
        return null;
    }
}
