const Bag = require("./bag.model");

//* create a bag
const postABag = async (req, res) => {
  try {
    const newBag = await Bag({ ...req.body });
    newBag.save();
    res.status(200).send({ message: "Bag posted successfully", bag: newBag });
  } catch (error) {
    res.status(500).send(`Error created ${error}`);
  }
};

//*get all bags
const getAllBags = async (req, res) => {
  try {
    const bags = await Bag.find().sort({ createdAt: -1 });
    res.status(200).send(bags);
  } catch (error) {
    res.status(500).send({ message: "Failed to fetch all books" });
    console.error(error);
  }
};

//*get single bag
const getSingleBag = async (req, res) => {
  try {
    const { id } = req.params;
    const bag = await Bag.findById(id);
    if (!bag) {
      res.status(404).send(`Book not found `);
    }
    res.status(200).send({ message: "Single bag fetched successfully", bag });
  } catch (error) {
    res.status(500).send({ message: "Failed to fetch book" });
    console.error(error);
  }
};

//* update a bag
const updateABag = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBag = await Bag.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedBag) {
      res.status(404).send(`Book not found `);
    }
    res
      .status(200)
      .send({ message: "Bag updated successfully", bag: updatedBag });
  } catch (error) {
    res.status(500).send({ message: "Failed to update book" });
    console.error(error);
  }
};

//* delete a bag
const deleteABag = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBag = await Bag.findByIdAndDelete(id);
    if (!deletedBag) {
      res.status(404).send(`Book not found `);
    }
    res
      .status(200)
      .send({ message: "Bag deleted successfully", bag: deletedBag });
  } catch (error) {
    console.error(`Error occured while deleting${error}`);
    res.status(500).send({ message: "Failed to delete book" });
  }
};
module.exports = { postABag, getAllBags, getSingleBag, updateABag, deleteABag };
