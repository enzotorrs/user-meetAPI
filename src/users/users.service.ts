import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

export type message = {
    message: string;
}

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }

    async findByUsername(username: string): Promise<User> {
        return await this.userRepository.findOne({ username: username })
    }

    async findAllUsers(): Promise<User[]> {
        return await this.userRepository.find()
    }

    async saveUser(user: User): Promise<User>{
        const newUser = await this.userRepository.save(user);
        return newUser;
    }

    async deleteUserById(id: number): Promise<message>{
        const result = await this.userRepository.delete(id)

        if(result.affected!==0){
            return {
                message: `user with id ${id} deleted`
            }
        }

        throw new BadRequestException()
    }

    async updateUser(user: User): Promise<User>{
        const exist = await this.userRepository.findOne(user.id);

        if(exist){
            const userUpdated = await this.userRepository.save(user)
            return userUpdated;
        }

        throw new BadRequestException()


    }
}
