import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtSuperUserGuard } from 'src/auth/guards/Jwt-superuser.guard';
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
    
    @UseGuards(JwtSuperUserGuard)
    @Post()
    async createNewMeet(@Body() meet: Meet): Promise<Meet> {
        return await this.meetService.saveNewMeet(meet);
    }

    @UseGuards(JwtSuperUserGuard)
    @Put()
    async updateMeet(@Body() meet: Meet): Promise<Meet> {
        const meetUpdated = await this.meetService.updateMeet(meet);
        return meetUpdated;
    }

    @UseGuards(JwtSuperUserGuard)
    @Delete(':id')
    async deleteMeet(@Param('id') id: number): Promise<Meet> {
        const meetDeleted = await this.meetService.deleteMeet(id);
        return meetDeleted;
    }
}
