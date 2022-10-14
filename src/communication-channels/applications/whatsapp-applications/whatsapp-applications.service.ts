import { Injectable } from '@nestjs/common';
import { ApplicationsService } from '../applications.service';

@Injectable()
export class WhatsappApplicationsService extends ApplicationsService {}
