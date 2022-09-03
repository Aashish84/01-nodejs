const Product = require("../models/Product");

const getAllProductStatic = async (req, res) => {
  const product = await Product.find({ price: { $gt: 30 } })
    .select("name price")
    .sort("price")
    .limit(10);
  res.status(200).json({ nbHits: product.length, product });
};

const getAllProduct = async (req, res) => {
  const { featured, company, name, sort, feilds, numericFilters } = req.query;
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured;
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" }; //regular expression - search all product that contain matching name value
  }

  //   price<31,rating>4
  if (numericFilters) {
    const operatorMap = {
      ">": "$gt",
      ">=": "$gte",
      "=": "$eq",
      "<": "$lt",
      "<=": "$lte",
    };

    const regEx = /\b(<|>|>=|=|<|<=)\b/g;

    let filters = numericFilters.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    );

    //   price-$lt-31,rating-$gt-4

    const options = ["price", "rating"];

    filters = filters.split(",").forEach((item) => {
      // price-$lt-31
      const [field, operator, value] = item.split("-");
      // field = price , operator = $lt , value = 31
      if (options.includes(field)) {
        queryObject[field] = { [operator]: Number(value) };
      }
    });
  }

  let result = Product.find(queryObject);

  if (sort) {
    const sortList = sort.split(",").join(" ");
    result = result.sort(sortList);
  } else {
    result = result.sort("-rating");
  }

  if (feilds) {
    const feildsList = feilds.split(",").join(" ");
    result = result.select(feildsList);
  }

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);

  const products = await result;
  res.status(200).json({ nbHits: products.length, products });
};

module.exports = { getAllProduct, getAllProductStatic };
