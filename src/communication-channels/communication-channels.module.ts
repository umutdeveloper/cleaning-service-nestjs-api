import { Module } from '@nestjs/common';
import { CommunicationChannelsService } from './communication-channels.service';
import { PhonesModule } from './phones/phones.module';
import { LocationsModule } from './locations/locations.module';
import { ApplicationsModule } from './applications/applications.module';

@Module({
  providers: [CommunicationChannelsService],
  imports: [PhonesModule, LocationsModule, ApplicationsModule],
})
export class CommunicationChannelsModule {}
