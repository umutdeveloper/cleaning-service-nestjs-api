import { Injectable } from '@nestjs/common';
import { CommunicationChannelsService } from '../communication-channels.service';
import { Phone } from './_interfaces/phone';
import { PhoneInformation } from './_interfaces/phone-information';

@Injectable()
export class PhonesService extends CommunicationChannelsService {
  getPhoneInformation(phone: Phone): PhoneInformation {
    return phone.phoneInformation;
  }
}
