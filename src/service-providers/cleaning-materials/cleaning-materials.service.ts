import { Injectable } from '@nestjs/common';
import { ServiceProvidersService } from '../service-providers.service';
import { CleaningMaterial } from './_interfaces/cleaning-material';
import { CleaningMaterialDetails } from './_interfaces/cleaning-material-details';

@Injectable()
export class CleaningMaterialsService extends ServiceProvidersService {
  getCleaningMaterialDetails(
    material: CleaningMaterial,
  ): CleaningMaterialDetails {
    return material.materialDetails;
  }
}
