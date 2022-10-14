import { CommunicationChannel } from 'src/communication-channels/_interfaces/communication-channel';
import { PhoneInformation } from './phone-information';

export interface Phone extends CommunicationChannel {
  phoneInformation: PhoneInformation;
}
