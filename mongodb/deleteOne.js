const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  const database = db.db("mydb");
  const delQry = { address: "Mountain 21" };
  database.collection("customers").deleteOne(delQry, (err, obj) => {
    if (err) throw err;
    console.log("1 was deleted");
    db.close();
  });
});
