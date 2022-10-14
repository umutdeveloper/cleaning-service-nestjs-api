import { EmployeeType } from '../_enums/employee-type';

export interface EmployeeInformation {
  birthDate: Date;
  nationality: string;
  nationalityNumber: string;
  employeeType: EmployeeType;
}
