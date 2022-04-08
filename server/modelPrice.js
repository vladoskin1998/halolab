import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const ModelPrice = new Schema(
    {
        name: { type: String, required: true },
        number: { type: String, required: true },
    }
)

export default model('ModelPrice', ModelPrice)