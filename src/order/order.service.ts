import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './interfaces/order.interface';

@Injectable()
export class OrderService {
    constructor(
        @InjectModel('Order') private readonly ordersModel: Model<Order>
    ) {}

    async create(createOrderDto: CreateOrderDto): Promise<Order> {
        const createForms = new this.ordersModel(createOrderDto);
        return createForms.save();
    }

    async findAll(): Promise<Order[]> {
        return this.ordersModel.find({}).lean()
    }

    async findOne(id: string): Promise<Order> {
        return this.ordersModel.findOne({_id: id }).lean();
    }

    async remove(id: any): Promise<Order> {
        return this.ordersModel.findOneAndRemove({ _id: id })
    }

    async update(id: string, updateOrder: any): Promise<Order> {
        return this.ordersModel.findOneAndUpdate({ _id: id}, updateOrder, {
          new: true,
          upsert: false,
          runValidators: true
        });
      }
    
      async addItemsToOrder(id: any, body: CreateOrderDto): Promise<any> {
        return await this.ordersModel.findOneAndUpdate({ _id: id }, {
            $push: {
                order: {
                    $each: body.order
                }
            }
        }, {
            new: true
        })
    }
}
