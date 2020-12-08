import { Document } from 'mongoose';

export interface Order extends Document {
    readonly order: Array<object>; 
}