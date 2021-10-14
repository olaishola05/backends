<!-- Node pre journal -->

# Node and backend tuts

The `createServer()` is used to create HTTP server
`http.createServer()` This method will be executed when someone tries to access the computer on the specified listening port

## HTTP Header

Is where you specified the correct content type, the first argument takes in the status code and second is the object containing the response headers
`res.writeHead(200, {'Content-Type': 'text/html'});`

## Reading Query String

The `http.createServer()` takes in a function with args such as req, res. The req argument represent the request from the client as an object. This object has a property called `url` which holds the parts of the url that comes after the domain name.

```
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.end();
}).listen(8080);
```

## Read Files

The `fs.readFile()` method is used to read files on your computer.
