import { Test, TestingModule } from '@nestjs/testing';
import { PriceService } from '../price.service';

describe('PriceService', () => {
  let service: PriceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PriceService],
    }).compile();

    service = module.get<PriceService>(PriceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should return price for ethereum', async () => {
    const price = await service.getPrice('ethereum');
    expect(price).toBeDefined();
    expect(price.ethereum).toBeDefined();
  });
});
