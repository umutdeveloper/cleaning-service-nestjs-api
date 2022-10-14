import { Injectable } from '@nestjs/common';
import { ServiceProvidersService } from '../service-providers.service';
import { Car } from './_interfaces/car';
import { CarDetails } from './_interfaces/car-details';

@Injectable()
export class CarsService extends ServiceProvidersService {
  getCarDetails(car: Car): CarDetails {
    return car.carDetails;
  }
}
