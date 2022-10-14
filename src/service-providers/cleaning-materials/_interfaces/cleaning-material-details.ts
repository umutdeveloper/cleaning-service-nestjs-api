import { LiquidCleaningMaterialFluidLevel } from '../_enums/cleaning-material-status';

export interface CleaningMaterialDetails {
  brand: string;
}

export interface LiquidCleaningMaterialDetails extends CleaningMaterialDetails {
  fluidLevel: LiquidCleaningMaterialFluidLevel;
  totalMilliliter: number;
}
