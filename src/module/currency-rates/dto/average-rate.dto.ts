import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, Length } from 'class-validator';

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
  @Length(3, 3)
  currencyCode: string;
}
