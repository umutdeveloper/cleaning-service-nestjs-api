import { Injectable } from '@nestjs/common';
import { PeopleService } from '../people.service';
import { Customer } from './_interfaces/customer';
import { CustomerInformation } from './_interfaces/customer-information';

@Injectable()
export class CustomersService extends PeopleService {
  getCustomerInformation(customer: Customer): CustomerInformation {
    return customer.customerInformation;
  }

  getGivenServices(customer: Customer): any {
    // Not implemented yet
  }
}
