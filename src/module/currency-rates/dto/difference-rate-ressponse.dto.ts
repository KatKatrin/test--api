import { ApiProperty } from '@nestjs/swagger';

export class DifferenceRateResponseDto {
  @ApiProperty({
    description: 'Currency code',
    example: 'USD',
  })
  currencyCode: string;

  @ApiProperty({
    description: 'The number of last quotations',
    example: 100,
  })
  quitations: number;

  @ApiProperty({
    description: 'The major difference between the buy and ask rate',
    example: 0.4006,
  })
  majorDifference: number;
}
