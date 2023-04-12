import { Controller, Get } from '@nestjs/common';


@Controller('api')
export class ApiController {
  constructor() {}

  @Get()
  getHello(): string {
    return 'voce esta dentro de outro controlller';
  }
}
