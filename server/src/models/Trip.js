const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    destination: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    budget: {
        type: Number,
        default: 0,
    },
    notes: {
        type: String,
    }
}, { timestamps: true });

module.exports = mongoose.model('Trip', tripSchema)