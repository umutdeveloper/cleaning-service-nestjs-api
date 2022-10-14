import { Injectable } from '@nestjs/common';
import { PeopleService } from '../people.service';
import { Employee } from './_interfaces/employee';
import { EmployeeInformation } from './_interfaces/employee-information';

@Injectable()
export class EmployeesService extends PeopleService {
  getEmployeeInformation(employee: Employee): EmployeeInformation {
    return employee.employeeInformation;
  }

  getResponsibleServiceTools(employee: Employee) {
    // Not implemented yet
  }
}
