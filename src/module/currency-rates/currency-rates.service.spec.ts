import { Test, TestingModule } from '@nestjs/testing';
import { HttpModule, HttpService } from '@nestjs/axios';
import { CurrencyRatesService } from './currency-rates.service';
import { AverageRateDto } from './dto/average-rate.dto';
import { QuotationsRateDto } from './dto/qoutations-rate.dto';

const mockResponse = {
  table: '',
  currency: 'dolar amerykański',
  code: 'USD',
  rates: [
    {
      no: '078/A/NBP/2023',
      effectiveDate: '2023-04-21',
      mid: 4.2006,
      bid: 4.6929,
      ask: 4.7675,
    },
    {
      no: '079/A/NBP/2023',
      effectiveDate: '2023-04-24',
      mid: 4.1905,
      bid: 4.6929,
      ask: 4.7675,
    },
  ],
};

const mockHttpService = {
  axiosRef: {
    get: jest.fn(() =>
      Promise.resolve({
        data: mockResponse,
      }),
    ),
  },
};

const averageRateDto: AverageRateDto = {
  date: '2023-04-21',
  currencyCode: 'USD',
};

const quotationsRateDto: QuotationsRateDto = {
  quotations: 2,
  currencyCode: 'USD',
};

describe('CurrencyRatesService', () => {
  let service: CurrencyRatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [
        CurrencyRatesService,
        {
          provide: HttpService,
          useValue: mockHttpService,
        },
      ],
    }).compile();

    service = module.get<CurrencyRatesService>(CurrencyRatesService);
  });

  describe('getAverageRate() should', () => {
    it('should return average rate for specified date and currency code', async () => {
      const result = await service.getAverageRate(averageRateDto);
      expect(result).toBeDefined();
      expect(result.averageRate).toBeDefined();
    });
  });

  describe('getMinMaxRate() should', () => {
    it('should return the max and min average value', async () => {
      const result = await service.getMinMaxRate(quotationsRateDto);
      expect(result).toBeDefined();
      expect(result.minAverageRate).toBeDefined();
      expect(result.maxAverageRate).toBeDefined();
    });
  });

  describe('getMajorDifference() should', () => {
    it('should return the max and min average value', async () => {
      const result = await service.getMajorDifference(quotationsRateDto);
      expect(result).toBeDefined();
      expect(result.majorDifference).toBeDefined();
    });
  });
});
