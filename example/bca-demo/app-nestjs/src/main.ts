import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { quoteShipmentOrchestrator } from './orchestrator/QuoteShipmentOrchestrator';

async function bootstrap() {
  const result = quoteShipmentOrchestrator({
    currentHour: 14,
    isHoliday: false,
    distanceKm: 5,
  });

  console.log('Quote Result:', result);
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
