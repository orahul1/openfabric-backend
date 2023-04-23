'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var productSchema = new Schema(
  {
    name: String,
    image: String,
    description: String,
    price: Number,
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
);

module.exports = mongoose.model('product', productSchema);
