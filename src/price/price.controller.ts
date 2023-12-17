import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { PriceService } from './price.service';

@Controller('price')
export class PriceController {
  constructor(private priceService: PriceService) {}

  @Get(':coinId')
  getPrice(@Param('coinId') coinId: string) {
    if (!coinId) {
      throw new NotFoundException('coinId is not defined');
    }
    return this.priceService.getPrice(coinId);
  }
}
