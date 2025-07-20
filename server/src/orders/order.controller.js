const Order = require("./order.model");

const createAnOrder = async (req, res) => {
  try {
    const newOrder = await Order(req.body);
    const saveOrder = await newOrder.save();
    res.status(200).json(saveOrder);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error placing order" });
  }
};

const getOrdersByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const orders = await Order.find({ email }).sort({ createdAt: -1 });
    if (!orders) {
      return res.status(404).send({ message: "Order not found" });
    }
    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error fetching order" });
  }
};
module.exports = { createAnOrder, getOrdersByEmail };
