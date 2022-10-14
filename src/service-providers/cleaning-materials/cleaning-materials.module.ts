import { Module } from '@nestjs/common';
import { CleaningMaterialsService } from './cleaning-materials.service';

@Module({
  providers: [CleaningMaterialsService],
})
export class CleaningMaterialsModule {}
