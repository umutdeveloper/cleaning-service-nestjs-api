import { CommunicationChannel } from 'src/communication-channels/_interfaces/communication-channel';
import { ApplicationInformation } from './application-information';

export interface Application extends CommunicationChannel {
  applicationInformation: ApplicationInformation;
}
