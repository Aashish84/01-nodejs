var MongoClient = require("mongodb").MongoClient;

const booksPromise = () => {
  return new Promise((resolve, reject) => {
    let url = "mongodb://localhost:27017/";
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("lib");
      dbo
        .collection("books")
        .find({})
        .toArray(function (err, result) {
          if (err) throw err;
          resolve(result);
          db.close();
        });
    });
  });
};

let allBooks = [];

const findAllBooks = async (res) => {
  try {
    allBooks = await booksPromise();
    res.json({ success: true, data: allBooks });
  } catch (error) {
    res.json({ success: false, error: error });
  }
};

module.exports = findAllBooks;
