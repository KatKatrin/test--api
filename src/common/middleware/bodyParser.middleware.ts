import { NestMiddleware } from '@nestjs/common';
import { json } from 'body-parser';

export class JsonBodyParserMiddleware implements NestMiddleware {
  use = json({ limit: 'mb' });
}
