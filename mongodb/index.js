const mongoDB = require("mongodb");
const MongoClient = mongoDB.MongoClient;
const url = "mongodb://localhost:27017/testdb";

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  console.log("Database created");
  db.close();
});
