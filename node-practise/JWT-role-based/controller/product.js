const getAllProduct = (req, res) => {
  res.send("hello from getAllProduct");
};
const getProduct = (req, res) => {
  res.send(req.params);
};

const addProduct = async (req, res) => {
  res.send("hello from addproduct");
};
const updateProduct = async (req, res) => {
  res.send(req.params);
};
const deleteProduct = async (req, res) => {
  res.send("delete product");
};

module.exports = {
  getAllProduct,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
};
