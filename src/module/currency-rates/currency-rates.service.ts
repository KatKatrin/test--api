import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

const urlAverageRate = 'http://api.nbp.pl/api/exchangerates/rates/A/';

@Injectable()
export class CurrencyRatesService {
  constructor(private readonly httpService: HttpService) {}

  async getRates(date, currencyCode) {
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

  async findAll() {
    return[]
  }
}