import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true
  }), MongooseModule.forRoot('mongodb+srv://pratiknavlani7572:D2BqW41U7fwQ9LI6@cluster0.17fzhy9.mongodb.net/', {dbName: 'sample01'}),BookModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
