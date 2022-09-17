const Product = require("../models/Product");
const { NotFoundError } = require("../errors");

const getAllProduct = async (req, res) => {
  const products = await Product.find({});
  res.status(200).json(products);
};

const getProduct = async (req, res) => {
  const { id: productID } = req.params;
  const product = await Product.findOne({ _id: productID });
  if (!product) {
    throw new NotFoundError("no product of id found to display");
  }
  res.status(200).json(product);
};

const addProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json(product);
};

const updateProduct = async (req, res) => {
  const { id: productID } = req.params;
  const product = await Product.findOneAndUpdate({ _id: productID }, req.body, {
    new: true,
  });
  if (!product) {
    throw new NotFoundError("no product found of given id to update");
  }
  res.status(200).json(product);
};
const deleteProduct = async (req, res) => {
  const { id: productID } = req.params;
  const product = await Product.findOneAndDelete({ _id: productID });
  if (!product) {
    throw new NotFoundError("no product found of given id to delete");
  }
  res.status(200).json(product);
};

module.exports = {
  getAllProduct,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
};
