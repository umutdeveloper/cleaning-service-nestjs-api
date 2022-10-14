import { PersonalInformation } from './personal-information';

export interface Person {
  personalInformation: PersonalInformation;
  communicationInformation: { [key: string]: any };
}
