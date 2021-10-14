const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
  try {
    const database = db.db("mydb");
    database.createCollection("customers", (err) => {
      if (err) throw err;
      console.log("Collection created!");
      db.close();
    });
  } catch (err) {
    console.log(err);
  }
});
