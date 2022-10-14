import { Person } from 'src/people/_interfaces/person';
import { CustomerInformation } from './customer-information';

export interface Customer extends Person {
  customerInformation: CustomerInformation;
}
