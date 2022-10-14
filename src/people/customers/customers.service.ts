import { Injectable } from '@nestjs/common';
import { Customer } from './_interfaces/customer';
import { CustomerInformation } from './_interfaces/customer-information';

@Injectable()
export class CustomersService {
  getCustomerInformation(customer: Customer): CustomerInformation {
    return customer.customerInformation;
  }

  getGivenServices(customer: Customer): any {
    // Not implemented yet
  }
}
