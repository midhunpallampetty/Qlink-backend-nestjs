// src/app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UrlsModule } from './urls/urls.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://midhunpallampetty:LMZTIUfDHvRrlL14@cluster0.f00fu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),
    UrlsModule,
    AuthModule,
  ],
})
export class AppModule {}
