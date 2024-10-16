import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { SubCategoryModule } from './sub-category/sub-category.module';

@Module({
  imports: [ 
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    MongooseModule.forRoot("mongodb+srv://Saif:6fxMdGx6lu00fFKm@kilagbeclaster01.oytnw.mongodb.net/KiLagbeDB?retryWrites=true&w=majority&appName=KiLagbeClaster01"),
    CategoryModule,
    SubCategoryModule],
  controllers: [AppController],

  providers: [AppService],
})
export class AppModule {}
