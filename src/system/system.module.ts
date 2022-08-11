import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SystemController } from './system.controller';
import { SystemService } from './system.service';
import { System, SystemSchema } from '../Schema/system.schema';
import { SystemDto } from 'src/DTO/system.dto';

@Module({
  imports:[,MongooseModule.forFeature([{ name: 'System', schema: SystemSchema }])],
  controllers: [SystemController],
  providers: [SystemService]
})
export class SystemModule {}
