import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PizzasModule } from './pizzas/pizzas.module';
import { OrderItemModule } from './order-item/order-item.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/pizzeria-api', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }),
    PizzasModule,
    OrderItemModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
