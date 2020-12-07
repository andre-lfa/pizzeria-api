import { ApiProperty } from "@nestjs/swagger";

export class CreatePizzaDto {
    @ApiProperty({
        type: String,
        description: "Name of the pizza"
    })
    readonly name: string;

    @ApiProperty({
        type: Number,
        description: "Price of the pizza"
    })
    readonly price: string;

    @ApiProperty({
        type: [String],
        description: "Ingredients list of the pizza"
    })
    readonly ingredients: [string];
    
}
