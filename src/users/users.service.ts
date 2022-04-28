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

    async deleteUserById(id: number): Promise<User>{
        const userForDelete = await this.userRepository.findOne(id);

        if(userForDelete){
            this.userRepository.delete(id);
            return userForDelete;
        }

        throw new BadRequestException(`user with id ${id} not exist`)
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
