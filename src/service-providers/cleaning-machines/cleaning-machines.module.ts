import { Module } from '@nestjs/common';
import { CleaningMachinesService } from './cleaning-machines.service';

@Module({
  providers: [CleaningMachinesService],
})
export class CleaningMachinesModule {}
