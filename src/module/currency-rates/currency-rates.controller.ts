import { Controller, Get, Post, Body } from '@nestjs/common';
import { CurrencyRatesService } from './currency-rates.service';

export class ExchangeRateDto {
  date: string;
  currencyCode: string;
}

@Controller('currency-rates')
export class CurrencyRatesController {
  constructor(private readonly currencyRatesService: CurrencyRatesService) {}

  @Post('/exchange-rate')
  getRates(@Body() exchangeRateDto: ExchangeRateDto): Promise<object> {
    const { date, currencyCode } = exchangeRateDto;
    return this.currencyRatesService.getRates(date, currencyCode);
  }

  @Get()
  findAll() {
    return this.currencyRatesService.findAll();
  }
}
