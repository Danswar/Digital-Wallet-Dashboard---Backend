import { Test, TestingModule } from '@nestjs/testing';
import { PriceController } from '../price.controller';

describe('PriceController', () => {
  let controller: PriceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PriceController],
    }).compile();

    controller = module.get<PriceController>(PriceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('should return price for ethereum', async () => {
    const price = await controller.getPrice('ethereum');
    expect(price).toBeDefined();
    expect(price.ethereum).toBeDefined();
  });
});
