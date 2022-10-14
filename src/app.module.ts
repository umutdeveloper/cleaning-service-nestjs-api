import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeopleModule } from './people/people.module';
import { CommunicationChannelsModule } from './communication-channels/communication-channels.module';

@Module({
  imports: [PeopleModule, CommunicationChannelsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
