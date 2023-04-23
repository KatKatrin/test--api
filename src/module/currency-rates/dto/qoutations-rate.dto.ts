import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Min, Max, IsInt } from 'class-validator';

export class QuotationsRateDto {
  @ApiProperty({
    description: 'The number of last quotations N (N <= 255)',
    example: 100,
  })
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  @Max(255)
  quotations: any;

  @ApiProperty({
    description: 'Currency code',
    example: 'USD',
  })
  @IsNotEmpty()
  currencyCode: string;
}
