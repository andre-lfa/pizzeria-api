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
  async create(createPizzaDto: CreatePizzaDto): Promise<Pizzas> {
    const createPizza = new this.pizzasModel(createPizzaDto);
    return createPizza.save();
  }

  async findAll(): Promise<Pizzas[]> {
    return this.pizzasModel.find({}).lean();
  }

  async findOne(id: string): Promise<Pizzas> {
    return this.pizzasModel.findOne({ _id: id}).lean();
  }

  async update(id: string, updatePizza: any): Promise<Pizzas> {
    return this.pizzasModel.findOneAndUpdate({ _id: id}, updatePizza, {
      new: true,
      upsert: false,
      runValidators: true
    });
  }

  remove(id: string) {
    return `This action removes a #${id} pizza`;
  }
}
