import { Document } from 'mongoose';

export interface OrderItem extends Document {
    readonly _id: string;
    readonly quantity: number;
    readonly pizzaID: string;

}