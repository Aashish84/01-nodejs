// navbar app
const http = require("http");
const { readFileSync } = require("fs");

const homepage = readFileSync("./public/index.html");
const homestyles = readFileSync("./public/styles.css");
const homelogo = readFileSync("./public/logo.svg");
const homelogic = readFileSync("./public/browser-app.js");

const server = http.createServer((req, res) => {
  //   console.log(req.method);
  console.log(req.url);
  // home
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homepage);
    // must have res.end()
    res.end();
  }
  // about
  else if (req.url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>about page</h1>");
    res.end();
  }
  // styles.css
  else if (req.url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homestyles);
    res.end();
  }
  // logo.svg
  else if (req.url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(homelogo);
    res.end();
  }
  // browser-app.js
  else if (req.url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homelogic);
    res.end();
  }
  // 404
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>page not found</h1>");
    res.end();
  }
});

server.listen(5001, () => {
  console.log("server is listening at port 5001...");
});
