import { Controller, Post, Body } from '@nestjs/common';
import {
  ApiBody,
  ApiOkResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CurrencyRatesService } from './currency-rates.service';
import { AverageRateDto } from './dto/average-rate.dto';
import { CurrencyRateErrorResponseDto } from './dto/currency-rates-error-response.dto';
import { AverageRateResponse } from './dto/average-rate-response.dto';
import { QuotationsRateDto } from './dto/qoutations-rate.dto';
import { MinMaxRateResponse } from './dto/min-max-rate-response.dto';
import { DifferenceRateResponseDto } from './dto/difference-rate-ressponse.dto';

@ApiTags('Currency-rates')
@ApiInternalServerErrorResponse({
  description: 'Internal server error',
  type: CurrencyRateErrorResponseDto,
})
@ApiNotFoundResponse({
  description: 'Not found',
  type: CurrencyRateErrorResponseDto,
})
@Controller('currency-rates')
export class CurrencyRatesController {
  constructor(private readonly currencyRatesService: CurrencyRatesService) {}

  @ApiBody({
    type: AverageRateDto,
    required: true,
    description: 'Date and currency rate',
  })
  @ApiOkResponse({
    description: 'Getting average currency rate',
    type: AverageRateResponse,
  })
  @Post('/average-rate')
  getAverageRate(@Body() dto: AverageRateDto) {
    return this.currencyRatesService.getAverageRate(dto);
  }

  @ApiBody({
    type: QuotationsRateDto,
    required: true,
    description: 'Quotations and currency rate',
  })
  @ApiOkResponse({
    description: 'Getting min/max average currency rate',
    type: MinMaxRateResponse,
  })
  @Post('/min-max-rate')
  getMinMaxRate(@Body() dto: QuotationsRateDto) {
    return this.currencyRatesService.getMinMaxRate(dto);
  }

  @ApiBody({
    type: QuotationsRateDto,
    required: true,
    description: 'Quotations and currency rate',
  })
  @ApiOkResponse({
    description: 'The major difference between the buy and ask rate',
    type: DifferenceRateResponseDto,
  })
  @Post('/difference-rate')
  getMajorDifference(@Body() dto: QuotationsRateDto) {
    return this.currencyRatesService.getMajorDifference(dto);
  }
}
