import { ServiceProvider } from 'src/service-providers/_interfaces/service-provider';
import { CleaningMaterialStatus } from '../_enums/cleaning-material-status';
import { CleaningMaterialType } from '../_enums/cleaning-material-type';
import { CleaningMaterialDetails } from './cleaning-material-details';

export interface CleaningMaterial extends ServiceProvider {
  materialType: CleaningMaterialType;
  materialStatus: CleaningMaterialStatus;
  materialUsageCount: number;
  materialDetails: CleaningMaterialDetails;
}
