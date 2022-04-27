import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Meet } from './meet.entity';

@Injectable()
export class MeetsService {
    constructor(
        @InjectRepository(Meet)
        private readonly meetRepository: Repository<Meet>,
    ){}

    async getAllMeets(): Promise<Meet[]> {
        return await this.meetRepository.find();
    }
}
