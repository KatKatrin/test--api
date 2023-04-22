import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Min, Max } from 'class-validator';

export class MinMaxRateDto {
  @ApiProperty({
    description: 'The number of last quotations N (N <= 255)',
    example: 100,
  })
  @IsNotEmpty()
  @Min(1)
  @Max(255)
  quotations: number;

  @ApiProperty({
    description: 'Currency code',
    example: 'USD',
  })
  @IsNotEmpty()
  currencyCode: string;
}
