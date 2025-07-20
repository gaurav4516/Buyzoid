const express = require("express");

const {
  postABag,
  getAllBags,
  getSingleBag,
  updateABag,
  deleteABag,
} = require("./bag.controller");
const verifyAdminToken = require("../middlewares/verifyAdminToken");
const router = express.Router();

router.post("/create-bag", verifyAdminToken, postABag);
//get all books
router.get("/", getAllBags);
//get single book
router.get("/:id", getSingleBag);
//update single book
router.put("/edit/:id", verifyAdminToken, updateABag);
//delete single book
router.delete("/:id", verifyAdminToken, deleteABag);

module.exports = router;
