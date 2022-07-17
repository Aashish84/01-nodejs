const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("hello my automobile is on flitz!");
  } else if (req.url === "/about") {
    res.end("hello from about page");
  } else {
    res.end(`
      <h1>oops!</h1>
      <p>this page doesnot exist </p>
      <a href='/'>go back home</a>
    `);
  }
});

server.listen(5000);
