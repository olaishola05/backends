const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
  if (err) throw err;

  const database = db.db("mydb");
  const updateQuery = { address: "Valley 345" };
  const newValues = {
    $set: { name: "Hebron James", addres: "Great Canyon 123" },
  };
  database
    .collection("customers")
    .updateOne(updateQuery, newValues, (err, res) => {
      if (err) throw err;
      console.log("1 document updated");
      console.log(res.acknowledged);
      db.close();
    });
});
