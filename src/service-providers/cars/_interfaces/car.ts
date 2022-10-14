import { ServiceProvider } from 'src/service-providers/_interfaces/service-provider';
import { CarStatus } from '../_enums/car-status';
import { CarDetails } from './car-details';

export interface Car extends ServiceProvider {
  carStatus: CarStatus;
  carDetails: CarDetails;
}
