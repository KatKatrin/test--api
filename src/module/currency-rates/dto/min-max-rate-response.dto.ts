import { ApiProperty } from '@nestjs/swagger';

export class MinMaxRateResponse {
  @ApiProperty({
    description: 'Min average value',
    example: 4.4006,
  })
  maxAverageRate: number;

  @ApiProperty({
    description: 'Max average value',
    example: 4.2066,
  })
  minAverageRate: number;
}
