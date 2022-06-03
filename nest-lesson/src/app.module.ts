import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ControllerModule } from './controller/controller.module';
import { ServiceModule } from './service/service.module';

//デコレーター
@Module({
  imports: [UsersModule, ControllerModule, ServiceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
