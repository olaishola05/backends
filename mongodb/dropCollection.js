const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  const database = db.db("mydb");
  database.collection("customers").drop((err, delOk) => {
    if (err) throw err;
    if (delOk) console.log("Collection deleted");
    db.close();
  });
});

// droping using dropCollection
// MongoClient.connect(url, function (err, db) {
//   if (err) throw err;
//   const database = db.db("mydb");
//   database.dropCollection("customers", function (err, delOK) {
//     if (err) throw err;
//     if (delOK) console.log("Collection deleted");
//     db.close();
//   });
// });
