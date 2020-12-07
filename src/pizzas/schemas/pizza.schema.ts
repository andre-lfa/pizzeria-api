import * as mongoose from 'mongoose';

export const Pizza = new mongoose.Schema ({
    name: {
        type: String,
        unique: true,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    ingredients: {
        type: [String],
        required: true
    }
})
