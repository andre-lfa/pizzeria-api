import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { Pizzas } from './interfaces/pizza.interface';

@Injectable()
export class PizzasService {
  constructor(
    @InjectModel('Pizzas') private readonly pizzasModel: Model<Pizzas>,
  ){}
  create(createPizzaDto: CreatePizzaDto): Promise<Pizzas> {
    const createPizza = new this.pizzasModel(createPizzaDto);
    return createPizza.save();
  }

  findAll() {
    return `This action returns all pizzas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pizza`;
  }

  update(id: number) {
    return `This action updates a #${id} pizza`;
  }

  remove(id: number) {
    return `This action removes a #${id} pizza`;
  }
}
