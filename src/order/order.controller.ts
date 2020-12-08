import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderService } from './order.service';

@ApiTags('order')
@Controller('order')
export class OrderController {
    constructor(private readonly orderService: OrderService) {}

  @Post()
  create(@Body() createOrder: CreateOrderDto) {
    return this.orderService.create(createOrder);
  }

  @Get()
  findAll() {
    return this.orderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateOrder: CreateOrderDto) {
    return this.orderService.update(id, updateOrder);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderService.remove(id);
  }

  @Put("addOrderItem/:id")
    async addOrderItem(@Param('id') id: string, @Body() body: CreateOrderDto): Promise<any> {
        return await this.orderService.addItemsToOrder(id, body);
  }

  @Put("removeOrderItem/:id")
    async removeOrderItem(@Param('id') id: string, @Query('orderID') orderID: string): Promise<any> {
        return await this.orderService.removeOrderItem(id, orderID);
  }
}
