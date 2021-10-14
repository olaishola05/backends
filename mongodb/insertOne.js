const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
  if (err) throw err;

  const database = db.db("mydb");
  const myObj = { name: "Company Inc", address: "Highway 37" };

  database.collection("customers").insertOne(myObj, (err, res) => {
    console.log("1 document inserted");
    db.close();
  });

  //   inserting many documents using insertMany()
});
