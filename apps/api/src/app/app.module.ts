import { Module } from '@nestjs/common';
import { ApiCoreModule } from '@simples/api-core';
import { CargosModule, TestesModule } from '@simples/api-cruds';

import { AppController } from './app.controller';
import { AppService } from './app.service';



@Module({
  imports: [ApiCoreModule, CargosModule, TestesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
