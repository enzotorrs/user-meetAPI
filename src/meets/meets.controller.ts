import { Body, Controller, Get, Post } from '@nestjs/common';
import { Meet } from './meet.entity';
import { MeetsService } from './meets.service';

@Controller('meets')
export class MeetsController {
    constructor(
        private readonly meetService: MeetsService,
    ){}

    @Get()
    async getAllMeets(): Promise<Meet[]>{
        return await this.meetService.getAllMeets();
    }

    @Post()
    async createNewMeet(@Body() meet: Meet): Promise<Meet>{
        return await this.meetService.saveNewMeet(meet);
    }
}
