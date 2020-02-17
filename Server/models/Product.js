const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number } = Schema.Types;

const productSchema = new Schema({
    
    title: {
        type: String,
        required:true
    },
  
    price: {
        type: Number,
        required:true
    },

    description: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required:true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }


});

module.exports = new Model('Product', productSchema);