import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      // This is local API index file
      // rootPath: join(__dirname, '..', 'client'),

      // This is angular application index file
      rootPath: join(__dirname, '../../dist', 'angular-14-app')
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
