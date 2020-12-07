import { Document } from 'mongoose';

export interface Pizzas extends Document {
    readonly _id: string,
    readonly name: string,
    readonly price: number,
    readonly ingredients: string[]
}