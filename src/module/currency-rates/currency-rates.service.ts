import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AverageRateResponse } from './dto/average-rate-response.dto';
import { AverageRateDto } from './dto/average-rate.dto';
import { MinMaxRateDto } from './dto/min-max-rate.dto';

const urlAverageRate = 'http://api.nbp.pl/api/exchangerates/rates/A/';

@Injectable()
export class CurrencyRatesService {
  constructor(private readonly httpService: HttpService) {}

  async getAverageRate(dto: AverageRateDto): Promise<AverageRateResponse> {
    const { date, currencyCode } = dto;
    const { data } = await this.httpService.axiosRef.get(
      `${urlAverageRate}${currencyCode}/${date}/`,
    );
    const { code, rates } = data;
    return {
      code,
      effectiveDate: rates[0].effectiveDate,
      averageRate: rates[0].mid,
    };
  }

  async getMinMaxRate(dto: MinMaxRateDto) {
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
}
