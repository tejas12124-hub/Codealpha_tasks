const express = require("express");
const Order = require("../models/Order");
const router = express.Router();

router.post("/", async (req, res) => {
  const { userId, cart, total } = req.body;

  if (!userId || !cart || cart.length === 0) {
    return res.status(400).json({ message: "Invalid order data" });
  }

  try {
    const order = new Order({
      userId,
      items: cart,
      total
    });

    await order.save();
    res.json({ message: "Order placed successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
