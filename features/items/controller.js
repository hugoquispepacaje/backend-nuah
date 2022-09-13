import Item from "../../models/item.js";

const getItems = async (req, res) => {
  try {
    const response = await Item.find();
    res.status(200).json({ 'items': response });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getItem = async (req, res) => {
  try {
    const _id = req.params.id;
    const response = await Item.findById(_id);
    res.status(200).json({ 'item': response });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export {
  getItems,
  getItem
};