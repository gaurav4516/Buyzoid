const mongoose = require("mongoose");
const express = require("express");
const Order = require("../orders/order.model");
const Bag = require("../bags/bag.model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const totalOrders = await Order.countDocuments();

    const totalSales = await Order.aggregate([
      {
        $group: {
          _id: null,
          totalSales: { $sum: "$totalPrice" },
        },
      },
    ]);

    const trendingBagsCount = await Bag.aggregate([
      { $match: { trending: true } },
      { $count: "trendingBagsCount" },
    ]);

    const trendingBags =
      trendingBagsCount.length > 0 ? trendingBagsCount[0].trendingBagsCount : 0;

    const totalBags = await Bag.countDocuments();

    // 6. Monthly sales (group by month and sum total sales for each month)
    const monthlySales = await Order.aggregate([
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m", date: "$createdAt" } }, // Group by year and month
          totalSales: { $sum: "$totalPrice" }, // Sum totalPrice for each month
          totalOrders: { $sum: 1 }, // Count total orders for each month
        },
      },
      { $sort: { _id: 1 } },
    ]);

    // Result summary
    res.status(200).json({
      totalOrders,
      totalSales: totalSales[0]?.totalSales || 0,
      trendingBags,
      totalBags,
      monthlySales,
    });
  } catch (error) {
    console.error("Error fetching admin stats:", error);
    res.status(500).json({ message: "Failed to fetch admin stats" });
  }
});

module.exports = router;
