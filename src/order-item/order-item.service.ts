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

  async findAll(): Promise<OrderItem[]> {
    return this.orderItemsModel.find({});
  }

  async findOne(id: string): Promise<OrderItem> {
    return this.orderItemsModel.findOne({_id : id}).lean();
  }

  async update(id: string, updateOrderItemDto: CreateOrderItemDto): Promise<OrderItem> {
    return this.orderItemsModel.findOneAndUpdate({_id: id}, updateOrderItemDto, {
      new: true,
      upsert: false,
      runValidators: true
    }).lean();
  }

  remove(id: string) {
    return this.orderItemsModel.findOneAndDelete({_id: id});
  }
}
