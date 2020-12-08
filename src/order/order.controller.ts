import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
    constructor(private readonly orderService: OrderService) {}

  @Post()
  create(@Body() createOrder: CreateOrderDto) {
    return this.orderService.create(createOrder);
  }

//   @Get()
//   findAll() {
//     return this.orderService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.orderService.findOne(id);
//   }

//   @Put(':id')
//   update(@Param('id') id: string, @Body() updatePizza: CreatePizzaDto) {
//     return this.orderService.update(id, updatePizza);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.orderService.remove(id);
//   }
}
