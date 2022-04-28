import { BadRequestException, Injectable } from '@nestjs/common';
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

    async saveNewMeet(meet: Meet): Promise<Meet>{
        const newMeet = this.meetRepository.save(meet);

        return newMeet;
    }

    async updateMeet(meet: Meet): Promise<Meet>{
        const exist = await this.meetRepository.findOne(meet.id);
        
        if(exist){
            const meetUpdated = await this.meetRepository.save(meet);
            return meetUpdated;
        }

        throw new BadRequestException("Meet not exists")
    }

    async deleteMeet(id: number): Promise<Meet>{
        const meetForDelete = await this.meetRepository.findOne(id);

        if(meetForDelete){
            this.meetRepository.delete(id)
            return meetForDelete
        }

        throw new BadRequestException(`meet with id ${id} not exist`)

    }
}
