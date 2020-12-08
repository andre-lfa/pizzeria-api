import { ApiProperty } from "@nestjs/swagger";

export class CreateOrderItemDto {
    @ApiProperty({
        type: String,
        description: 'ID da pizza'
    })
    readonly pizzaID: string;

    @ApiProperty({
        type: Number,
        description: 'Quantidade da pizza que será pedida'
    })
    readonly quantity: number;
}
