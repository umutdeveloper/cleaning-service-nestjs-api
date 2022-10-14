import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeopleModule } from './people/people.module';
import { CommunicationChannelsModule } from './communication-channels/communication-channels.module';
import { ServiceProvidersModule } from './service-providers/service-providers.module';

@Module({
  imports: [PeopleModule, CommunicationChannelsModule, ServiceProvidersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
