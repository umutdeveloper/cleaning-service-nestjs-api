import { Module } from '@nestjs/common';
import { PeopleService } from './people.service';
import { FoundersModule } from './founders/founders.module';
import { EmployeesModule } from './employees/employees.module';
import { CustomersModule } from './customers/customers.module';

@Module({
  providers: [PeopleService],
  imports: [FoundersModule, EmployeesModule, CustomersModule],
  exports: [FoundersModule, EmployeesModule, CustomersModule],
})
export class PeopleModule {}
