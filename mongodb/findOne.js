const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  const database = db.db("mydb");
  const qry = { name: "William" };

  database.collection("customers").findOne(qry, (err, result) => {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
