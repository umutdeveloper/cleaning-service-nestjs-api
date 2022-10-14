import { Injectable } from '@nestjs/common';
import { CommunicationChannelsService } from '../communication-channels.service';
import { LocationType } from './_enums/location-type';
import { Location } from './_interfaces/location';
import {
  LocationDetails,
  LocationInformation,
} from './_interfaces/location-information';

@Injectable()
export class LocationsService extends CommunicationChannelsService {
  getLocationInformation(location: Location): LocationInformation {
    return location.locationInformation;
  }

  getLocationDetailsByType(
    location: Location,
    type: LocationType,
  ): LocationDetails {
    return location.locationInformation[type];
  }
}
