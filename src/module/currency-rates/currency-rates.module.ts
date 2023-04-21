import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CurrencyRatesController } from './currency-rates.controller';
import { CurrencyRatesService } from './currency-rates.service';

@Module({
  imports: [HttpModule],
  providers: [CurrencyRatesService],
  controllers: [CurrencyRatesController],
})
export class CurrencyRatesModule {}
