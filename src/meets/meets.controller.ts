import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
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
    
    @UseGuards(JwtAuthGuard)
    @Post()
    async createNewMeet(@Body() meet: Meet): Promise<Meet> {
        return await this.meetService.saveNewMeet(meet);
    }

    @UseGuards(JwtAuthGuard)
    @Put()
    async updateMeet(@Body() meet: Meet): Promise<Meet> {
        const meetUpdated = await this.meetService.updateMeet(meet);
        return meetUpdated;
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async deleteMeet(@Param('id') id: number): Promise<Meet> {
        const meetDeleted = await this.meetService.deleteMeet(id);
        return meetDeleted;
    }
}
