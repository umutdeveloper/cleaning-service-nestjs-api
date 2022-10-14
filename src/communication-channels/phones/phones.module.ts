import { Module } from '@nestjs/common';
import { PhonesService } from './phones.service';

@Module({
  providers: [PhonesService],
})
export class PhonesModule {}
