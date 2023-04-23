import { ApiProperty } from '@nestjs/swagger';

export class AverageRateResponse {
  @ApiProperty({
    description: 'Date of currency rate',
    example: '2023-04-21',
  })
  effectiveDate: string;

  @ApiProperty({
    description: 'Currency code',
    example: 'USD',
  })
  currencyCode: string;

  @ApiProperty({
    description: 'Currency code',
    example: '4.0655',
  })
  averageRate: number;
}
