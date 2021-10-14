const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  const database = db.db("mydb");
  const queryParams = { address: /^S/ };
  const newValues = { $set: { name: "Minnie" } };

  database
    .collection("customers")
    .updateMany(queryParams, newValues, (err, res) => {
      if (err) throw err;
      console.log(res.modifiedCount + " document(s) updated");
    });
});
