import { Injectable } from '@nestjs/common';
import { ServiceProvidersService } from '../service-providers.service';
import { CleaningMachine } from './_interfaces/cleaning-machine';
import { CleaningMachineDetails } from './_interfaces/cleaning-machine-details';

@Injectable()
export class CleaningMachinesService extends ServiceProvidersService {
  getCleaningMachineDetails(machine: CleaningMachine): CleaningMachineDetails {
    return machine.machineDetails;
  }
}
