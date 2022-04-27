import { Test, TestingModule } from '@nestjs/testing';
import { MeetsService } from './meets.service';

describe('MeetsService', () => {
  let service: MeetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MeetsService],
    }).compile();

    service = module.get<MeetsService>(MeetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
