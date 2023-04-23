import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CurrencyRateErrorResponseDto {
  @ApiProperty({
    example: 404,
    description: 'HTTP status code',
  })
  statusCode: number;

  @ApiProperty({
    example: 'Not found',
    description: 'Error message',
  })
  message: string;

  @ApiPropertyOptional({
    description: 'Object with additional error details',
  })
  errors?: string;
}
