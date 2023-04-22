import { Controller, Post, Body } from '@nestjs/common';
import { CurrencyRatesService } from './currency-rates.service';
import {
  ApiBody,
  ApiOkResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AverageRateDto } from './dto/average-rate.dto';
import { CurrencyRateErrorResponseDto } from './dto/currency-rates-error-response.dto';
import { AverageRateResponse } from './dto/average-rate-response.dto';
import { MinMaxRateDto } from './dto/min-max-rate.dto';
import { MinMaxRateResponse } from './dto/min-max-rate-response.dto';

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
    description: 'date and currency rate',
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
    type: MinMaxRateDto,
    required: true,
    description: 'quotations and currency rate',
  })
  @ApiOkResponse({
    description: 'Getting min/max average currency rate',
    type: MinMaxRateResponse,
  })
  @Post('/min-max-rate')
  getMinMaxRate(@Body() dto: MinMaxRateDto): Promise<object> {
    console.log('innnnnnnnnnnnnnnnnnnnnnn')
    return this.currencyRatesService.getMinMaxRate(dto);
  }
}
