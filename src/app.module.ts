import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ApiController } from './api.controller';
import { PrismaService } from './database/prisma.service';
import { MembersRepository } from './repositories/members-repository';
import { PrismaMembersRepository } from './repositories/prisma/prisma-members-repository';


@Module({
  imports: [],
  controllers: [AppController, ApiController],
  providers: [
    PrismaService,
    {
      provide: MembersRepository,//injeção de dependencia
      useClass: PrismaMembersRepository
    }
  ],
})
export class AppModule {}
