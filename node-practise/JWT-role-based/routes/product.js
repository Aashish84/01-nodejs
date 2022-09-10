const express = require("express");
const router = express.Router();

const {
  getAllProduct,
  addProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/product");
const authMiddleware = require("../middleware/auth");
const adminAuth = require("../middleware/adminAuth");

router.use(authMiddleware);

router.get("/", getAllProduct);
router.get("/:id", getProduct);

router.use(adminAuth);
router.post("/", addProduct);
router.route("/:id").patch(updateProduct).delete(deleteProduct);

// router.route("/").get(getAllProduct).post(addProduct);

module.exports = router;
