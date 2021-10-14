const http = require("http");
const fs = require("fs");
const url = require("url");
const formidable = require("formidable");

http
  .createServer((req, res) => {
    if (req.url == "/fileupload") {
      const form = new formidable.IncomingForm();
      form.parse(req, (err, fields, files) => {
        const oldpath = files.file.path;
        const newpath = "./public/storage/" + files.file.name;
        console.log(files);
        fs.rename(oldpath, newpath, (err) => {
          if (err) throw err;
          res.write("File uploaded and moved!");
          res.end();
        });
      });
    } else {
      const qry = url.parse(req.url, true);
      const filename = "./public/" + qry.pathname;
      fs.readFile(filename, (err, data) => {
        if (err) {
          res.writeHead(404, { "Content-Type": "text/html" });
          return res.end("404 page not found");
        }

        res.write(data);
        res.end();
      });
    }
  })
  .listen(8080);
