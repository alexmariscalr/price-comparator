const mongoose = require("mongoose");

const priceSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  store: {
    type: String,
    required: true,
  },
  // Otros campos según tus necesidades
});

const Price = mongoose.model("Price", priceSchema);

module.exports = Price;
