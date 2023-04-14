import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { randomUUID } from 'crypto';
import { CreateTeamMemberBody } from './dfos/create-team-members';
import { MembersRepository } from './repositories/members-repository';


@Controller('app')
export class AppController {
  constructor( private membersRepository: MembersRepository) {}

  @Post('hello')
  async getHello(@Body() body: CreateTeamMemberBody) {
    const { name, 'function': memberFunction } = body;
    await this.membersRepository.create(name, memberFunction)
  }
}
