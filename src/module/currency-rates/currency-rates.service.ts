import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AverageRateResponse } from './dto/average-rate-response.dto';
import { AverageRateDto } from './dto/average-rate.dto';
import { QuotationsRateDto } from './dto/qoutations-rate.dto';
import { urlAverageRate, urlExchangeRate } from 'src/common/constants';

@Injectable()
export class CurrencyRatesService {
  constructor(private readonly httpService: HttpService) {}

  async getAverageRate(dto: AverageRateDto): Promise<AverageRateResponse> {
    const { date, currencyCode } = dto;
    const { data } = await this.httpService.axiosRef.get(
      `${urlAverageRate}${currencyCode}/${date}/`,
    );
    return {
      currencyCode,
      effectiveDate: date,
      averageRate: data.rates[0].mid,
    };
  }

  async getMinMaxRate(dto: QuotationsRateDto) {
    const { quotations, currencyCode } = dto;
    const { data } = await this.httpService.axiosRef.get(
      `${urlAverageRate}${currencyCode}/last/${quotations}/`,
    );
    const rates = data.rates;

    if (quotations === 1) {
      const midRate = rates[0].mid;
      return { maxAverageRate: midRate, minAverageRate: midRate };
    }
    const averagesRate = rates.map((rate) => rate.mid);
    const maxAverageRate = Math.max(...averagesRate);
    const minAverageRate = Math.min(...averagesRate);

    return { maxAverageRate, minAverageRate };
  }

  async getMajorDifference(dto: QuotationsRateDto) {
    const { quotations, currencyCode } = dto;
    const { data } = await this.httpService.axiosRef.get(
      `${urlExchangeRate}${currencyCode}/last/${quotations}/`,
    );

    const buyRates = data.rates.map((rate) => rate.bid);
    const askRates = data.rates.map((rate) => rate.ask);

    const differences = askRates.map((askRate, i) => askRate - buyRates[i]);
    const maxDifference = Math.max(...differences).toFixed(4);

    return {
      currencyCode,
      quotations,
      majorDifference: maxDifference,
    };
  }
}
