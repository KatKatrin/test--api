import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty } from 'class-validator';

export class AverageRateDto {
  @ApiProperty({
    description: 'Date of currency rate',
    example: '2023-04-21',
  })
  @IsNotEmpty()
  @IsDateString()
  date: string;

  @ApiProperty({
    description: 'Currency code',
    example: 'USD',
  })
  @IsNotEmpty()
  currencyCode: string;
}
