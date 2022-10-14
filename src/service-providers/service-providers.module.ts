import { Module } from '@nestjs/common';
import { ServiceProvidersService } from './service-providers.service';
import { CarsModule } from './cars/cars.module';
import { CleaningMaterialsModule } from './cleaning-materials/cleaning-materials.module';
import { CleaningMachinesModule } from './cleaning-machines/cleaning-machines.module';

@Module({
  providers: [ServiceProvidersService],
  imports: [CarsModule, CleaningMaterialsModule, CleaningMachinesModule],
})
export class ServiceProvidersModule {}
