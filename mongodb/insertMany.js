const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
  if (err) throw err;

  const database = db.db("mydb");
  const myObj = [
    { name: "John", address: "Highway 71" },
    { name: "Peter", address: "Lowstreet 4" },
    { name: "Amy", address: "Apple st 652" },
    { name: "Hannah", address: "Mountain 21" },
    { name: "Michael", address: "Valley 345" },
    { name: "Sandy", address: "Ocean blvd 2" },
    { name: "Betty", address: "Green Grass 1" },
    { name: "Richard", address: "Sky st 331" },
    { name: "Susan", address: "One way 98" },
    { name: "Vicky", address: "Yellow Garden 2" },
    { name: "Ben", address: "Park Lane 38" },
    { name: "William", address: "Central st 954" },
    { name: "Chuck", address: "Main Road 989" },
    { name: "Viola", address: "Sideway 1633" },
  ];
  database.collection("customers").insertMany(myObj, (err, res) => {
    if (err) throw err;

    console.log("number of documents inserted " + res.insertedCount);
    console.log(res);
    db.close();
  });
});
