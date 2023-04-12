import { Body, Controller, Get } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { randomUUID } from 'crypto';
import { CreateTeamMemberBody } from './dfos/create-team-members';


@Controller('app')
export class AppController {
  constructor(
    private prisma: PrismaService
  ) {}


  @Get('hello')
  async getHello(@Body() body: CreateTeamMemberBody) {
    const { name, 'function': memberFunction } = body;

    console.log(body)
    const member = await this.prisma.membro.create({
      data: {
        id: randomUUID(),
        name,
        function: memberFunction
      }
    });
    return {
      member,
    };
  }
}
