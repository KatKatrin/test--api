import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { CurrencyRatesController } from './currency-rates.controller';
import { CurrencyRatesService } from './currency-rates.service';

describe('CurrencyRatesController', () => {
  let controller: CurrencyRatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [CurrencyRatesService],
      controllers: [CurrencyRatesController],
    }).compile();

    controller = module.get<CurrencyRatesController>(CurrencyRatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
