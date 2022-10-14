import { Module } from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { WhatsappApplicationsService } from './whatsapp-applications/whatsapp-applications.service';
import { InstagramApplicationsService } from './instagram-applications/instagram-applications.service';

@Module({
  providers: [
    ApplicationsService,
    WhatsappApplicationsService,
    InstagramApplicationsService,
  ],
})
export class ApplicationsModule {}
