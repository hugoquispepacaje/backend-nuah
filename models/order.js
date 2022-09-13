import mongoose from 'mongoose';
const { Schema } = mongoose;

const itemOrderSchema = new Schema({
  itemId: {type: Schema.Types.ObjectId, ref: 'item'},
  quantity: Number,
  amount: Number,
});

const orderSchema = new Schema({
  items: [itemOrderSchema],
  totalQuantity: Number,
  totalAmount: Number,
});

const Order = mongoose.model('order', orderSchema);

export default Order;