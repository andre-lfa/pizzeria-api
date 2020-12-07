import * as mongoose from 'mongoose';

export const OrderItemsSchema = new mongoose.Schema({
    pizzaID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Pizzas",
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});
