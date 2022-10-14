import { Person } from 'src/people/_interfaces/person';
import { EmployeeInformation } from './employee-information';

export interface Employee extends Person {
  employeeInformation: EmployeeInformation;
}
