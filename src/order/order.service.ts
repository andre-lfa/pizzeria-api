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
}
