import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

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
}
