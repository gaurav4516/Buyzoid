const express = require("express");
const { createAnOrder, getOrdersByEmail } = require("./order.controller");
const router = express.Router();

router.post("/", createAnOrder);

router.get("/email/:email", getOrdersByEmail);

module.exports = router;
