const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
  if (err) throw err;

  const dbs = db.db("mydb");
  const order = { product_id: "61684ce1de9173c68f600f54", status: 1 };
  const prods = [
    { name: "Chocolate Heaven" },
    { name: "Tasty Lemons" },
    { name: "Vanilla Dreams" },
  ];

  dbs.collection("orders").insertOne(order, (err, res) => {
    if (err) throw err;
    console.log("1 document inserted");
  });

  dbs.collection("products").insertMany(prods, (err, res) => {
    if (err) throw err;
    console.log(res.insertedCount + " documents(s) inserted");
  });

  //   dbs
  //     .collection("orders")
  //     .find()
  //     .toArray((err, res) => {
  //       if (err) throw err;
  //       console.log(res);
  //       db.close();
  //     });
  dbs
    .collection("orders")
    .aggregate([
      {
        $lookup: {
          from: "products",
          localField: "product_id",
          foreignField: "_id",
          as: "orderdetails",
        },
      },
    ])
    .toArray((err, res) => {
      if (err) throw err;
      console.log(JSON.stringify(res));
      db.close();
    });
});
