import { Injectable } from '@nestjs/common';
import { Person } from './_interfaces/person';
import { PersonalInformation } from './_interfaces/personal-information';

@Injectable()
export class PeopleService {
  getPersonalInformation(person: Person): PersonalInformation {
    return person.personalInformation;
  }

  getCommunicationInformation(person: Person): any {
    return person.communicationInformation;
  }
}
