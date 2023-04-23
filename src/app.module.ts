import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { JsonBodyParserMiddleware } from './common/middleware/bodyParser.middleware';
import { CurrencyRatesModule } from './module/currency-rates/currency-rates.module';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('App')
@Module({
  imports: [CurrencyRatesModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(JsonBodyParserMiddleware).forRoutes('*');
  }
}
