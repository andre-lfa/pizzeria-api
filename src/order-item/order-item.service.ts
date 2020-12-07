import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { OrderItem } from './interfaces/order-item.interface';

@Injectable()
export class OrderItemService {
  constructor(
    @InjectModel('OrderItems') private readonly orderItemsModel: Model<OrderItem>
  ) {}
  async create(createOrderItemDto: CreateOrderItemDto): Promise<OrderItem> {
    const createOrderItem = new this.orderItemsModel(createOrderItemDto)
    return createOrderItem.save();
  }

  findAll() {
    return `This action returns all orderItem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orderItem`;
  }

  update(id: number, updateOrderItemDto: CreateOrderItemDto) {
    return `This action updates a #${id} orderItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderItem`;
  }
}
