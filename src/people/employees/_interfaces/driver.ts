import { EmployeeInformation } from './employee-information';

export interface Driver extends EmployeeInformation {
  licenseClass: string;
  licenseDate: Date;
}
