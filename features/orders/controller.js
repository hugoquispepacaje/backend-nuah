import Order from "../../models/order.js";

const getOrder = async (req, res) => {
  try {
    const _id = req.params.id;
    const response = await Order.findById(_id).populate('items.itemId');
    res.status(200).json({ 'order': response });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getOrders = async (req, res) => {
  try {
    const response = await Order.find();
    res.status(200).json({ 'orders': response });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const createOrder = async (req, res) => {
  try {
    const order = req.orderValidated;
    const response = await Order.create(order);
    res.status(200).json({ 'order': response });
    return;
  }
  catch (error) {
    res.status(500).json({ error });
    return;
  }
};

const updateOrder = async (req, res) => {
  try {
    const order = req.orderValidated;
    const _id = req.params.id;
    const response = await Order.updateOne({_id}, order);
    res.status(200).json({ 'order': response });
    return;
  }
  catch (error) {
    res.status(500).json({ error });
    return;
  }
};

const deleteOrder = async (req, res) => {
  try {
    const _id = req.params.id;
    const response = await Order.findByIdAndDelete(_id);
    res.status(200).json({ 'order': response });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export {
  getOrder,
  getOrders,
  createOrder,
  updateOrder,
  deleteOrder
};