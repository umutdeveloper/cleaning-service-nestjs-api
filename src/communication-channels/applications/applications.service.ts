import { Injectable } from '@nestjs/common';
import { Application } from './_interfaces/application';
import { ApplicationInformation } from './_interfaces/application-information';

@Injectable()
export class ApplicationsService {
  getApplicationInformation(application: Application): ApplicationInformation {
    return application.applicationInformation;
  }
}
