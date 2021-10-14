const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  //   const query = { address: "Park Lane 38" };
  const regexQry = { address: /^S/ };
  const database = db.db("mydb");

  database
    .collection("customers")
    .find(regexQry)
    .toArray((err, result) => {
      if (err) throw err;
      console.log(result);
      db.close();
    });
});
