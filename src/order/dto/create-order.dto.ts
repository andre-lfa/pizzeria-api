import { ApiProperty } from '@nestjs/swagger';
import { CreateOrderItemDto } from 'src/order-item/dto/create-order-item.dto';

export class CreateOrderDto {
    @ApiProperty({
        type: [CreateOrderItemDto],
        description: 'Order items of the order'
    })
    readonly order: () => CreateOrderItemDto;
}