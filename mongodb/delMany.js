const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  const database = db.db("mydb");
  const delManyQry = { address: /^O/ };
  database.collection("customers").deleteMany(delManyQry, (err, obj) => {
    if (err) throw err;
    console.log(obj + " document(s) deleted");
    db.close();
  });
});
