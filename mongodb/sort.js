const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
  if (err) throw err;

  //   sort by ascending
  //   const sort = { address: 1 };

  //   sorting by descending
  const descending = { name: -1 };
  const database = db.db("mydb");

  database
    .collection("customers")
    .find()
    .sort(descending)
    .toArray((err, result) => {
      if (err) throw err;
      console.log(result);
      db.close();
    });
});
