import { Controller, Get } from '@nestjs/common';
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
}
