const express = require("express");
const { products } = require("./data.js");
const app = express();

app.get("/", (req, res) => {
  res.send('<h1>hello</h1> <a href="/api/products">products</a>');
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

app.get("/api/products/query", (req, res) => {
  console.log(req.query);
  const { search, limit } = req.query;

  let someProducts = [...products];
  if (search) {
    someProducts = someProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }

  if (limit) {
    someProducts = someProducts.slice(0, Number(limit));
  }

  if (someProducts.length < 1) {
    return res.status(200).json({ success: true, data: [] });
  }

  res.json(someProducts);
});

app.get("/api/products/:productID", (req, res) => {
  const { productID } = req.params;
  console.log(productID);
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );
  if (singleProduct == undefined) {
    res.status(404).send("resource not found");
    return;
  }
  res.json(singleProduct);
});

app.listen(5000, () => {
  console.log("server is listening at 5000...");
});
