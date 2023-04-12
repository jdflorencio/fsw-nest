import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ApiController } from './api.controller';
import { PrismaService } from './database/prisma.service';


@Module({
  imports: [],
  controllers: [AppController, ApiController],
  providers: [PrismaService],
})
export class AppModule {}
