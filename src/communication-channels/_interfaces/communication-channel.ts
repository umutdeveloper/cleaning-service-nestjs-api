import { CommunicationChannelType } from '../_enums/communication-channel-type';

export interface CommunicationChannel {
  communicationChannelType: CommunicationChannelType;
  creationDate: Date;
  updateDate: Date;
}
