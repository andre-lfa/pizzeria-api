import * as mongoose from 'mongoose';

export const OrderSchema = new mongoose.Schema({
    order: [{
        pizzaID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Pizzas", 
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }  
    }]
});