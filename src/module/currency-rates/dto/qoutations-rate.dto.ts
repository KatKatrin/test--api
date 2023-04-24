import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Min, Max, IsInt, Length } from 'class-validator';

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
  @Length(3, 3)
  currencyCode: string;
}
