const Product = require("../models/product.model");

const addNewProduct = (req, res) => {
  Product.create(req.body)
    .then((newProduct) => {
      console.log(newProduct);
      res.json(newProduct);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
};

const getAllProducts = (req, res) => {
  Product.find()
    .then((allProduct) => res.json(allProduct))
    .catch((err) => console.log(err));
};

const getProductById = (req, res) => {
  Product.findOne({ _id: req.params.id })
    .then((queriedProduct) => res.json(queriedProduct))
    .catch((err) => console.log(err));
};

const updateProduct = (req, res) => {
  Product.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updateProduct) => res.json(updateProduct))
    .catch((err) => res.status(400).json(err));
};

const deleteProduct = (req, res) => {
  Product.deleteOne({ _id: req.params.id })
    .then((result) => res.json(result))
    .catch((err) => res.json({ message: "delete not success", error: err }));
};

module.exports = {
  addNewProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
