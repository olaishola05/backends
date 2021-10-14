const http = require("http");
const date = require("./modules/firstModule");
const fs = require("fs");
const url = require("url");
const addr =
  "http://localhost:8080/public/index.html?year=2021&month=september";
const q = url.parse(addr, true);

http
  .createServer(function (req, res) {
    fs.readFile("./public/index.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("The date and time are currently: " + date.myDateTime());
      res.write(req.url);
      res.write(data);
      res.end();
    });
  })
  .listen(8080);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

const qdata = q.query;
console.log(qdata);
