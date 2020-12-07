import { Module } from '@nestjs/common';
import { PizzasService } from './pizzas.service';
import { PizzasController } from './pizzas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pizza } from './schemas/pizza.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'Pizzas', schema: Pizza}
    ])
  ],
  controllers: [PizzasController],
  providers: [PizzasService]
})
export class PizzasModule {}
