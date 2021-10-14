const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
  if (err) throw err;

  const database = db.db("mydb");
  const mySort = { name: 1 };
  database
    .collection("customers")
    .find()
    .limit(5)
    .sort(mySort)
    .toArray((err, res) => {
      if (err) throw err;
      console.log(res);
    });
});
