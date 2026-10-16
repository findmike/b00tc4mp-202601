import mongoose from 'mongoose';

export const memoSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true, 
    },

    date: {
        type: Date,
        default: Date.now,
        required: true,
    },

    subject: {
        type: String,
        required: true,
    },

    body: {
        type: String,
    }
    
});