import { ServiceProvider } from 'src/service-providers/_interfaces/service-provider';
import { CleaningMachineStatus } from '../_enums/cleaning-machine-status';
import { CleaningMachineDetails } from './cleaning-machine-details';

export interface CleaningMachine extends ServiceProvider {
  machineStatus: CleaningMachineStatus;
  machineUsageCount: number;
  machineDetails: CleaningMachineDetails;
}
