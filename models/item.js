import mongoose from 'mongoose';
const { Schema } = mongoose;

const itemSchema = new Schema({
  name: String,
  type: String,
  color: String,
  size: String,
  price: Number,
  stock: Number,
  image: [String]
});

const Item = mongoose.model('item', itemSchema);

export default Item;