import { CommunicationChannel } from 'src/communication-channels/_interfaces/communication-channel';
import { LocationInformation } from './location-information';

export interface Location extends CommunicationChannel {
  locationInformation: LocationInformation;
}
