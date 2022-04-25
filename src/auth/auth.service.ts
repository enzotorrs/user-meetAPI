import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
    ){}

    async validateUser(username: string, pass: string){
        const user = await this.usersService.findByUsername(username);
        if(user && pass === user.password){
            const {password, ...result} = user;
            return result
        }
        return null;
    }

    async login(user: any){
        const payload = {username: user.username, sub: user.userId}
        return {
            acess_token: this.jwtService.sign(payload)
        }
    }
}
