import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Meet } from './meet.entity';
import { MeetsService } from './meets.service';

@Controller('meets')
export class MeetsController {
    constructor(
        private readonly meetService: MeetsService,
    ) { }

    @Get()
    async getAllMeets(): Promise<Meet[]> {
        return await this.meetService.getAllMeets();
    }

    @Post()
    async createNewMeet(@Body() meet: Meet): Promise<Meet> {
        return await this.meetService.saveNewMeet(meet);
    }

    @Put()
    async updateMeet(@Body() meet: Meet): Promise<Meet> {
        const meetUpdated = await this.meetService.updateMeet(meet);
        return meetUpdated;
    }

    @Delete(':id')
    async deleteMeet(@Param('id') id: number): Promise<Meet> {
        const meetDeleted = await this.meetService.deleteMeet(id);
        return meetDeleted;
    }
}
