import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { PizzasService } from './pizzas.service';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('pizzas')
@Controller('pizzas')
export class PizzasController {
  constructor(private readonly pizzasService: PizzasService) {}

  @Post()
  create(@Body() createPizzaDto: CreatePizzaDto) {
    return this.pizzasService.create(createPizzaDto);
  }

  @Get()
  findAll() {
    return this.pizzasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pizzasService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePizza: CreatePizzaDto) {
    return this.pizzasService.update(id, updatePizza);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pizzasService.remove(id);
  }
}
