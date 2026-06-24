const http = require("http");
const fs = require("fs");
const path = require("path");
const PORT = 3000;
const PUBLIC = __dirname;
const MIME = {
  ".html": "text/html",
  ".js": "application/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".svg": "image/svg+xml",
};
http.createServer((req, res) => {
  let filePath = path.join(PUBLIC, req.url === "/" ? "index.html" : req.url);
  const ext = path.extname(filePath);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not Found. Check the URL path.");
      return;
    }
    res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
    res.end(data);
  });
}).listen(PORT, () => {
  console.log("==========================================");
  console.log("  DynastyInsurance site is LIVE!");
  console.log("  Open in your browser:");
  console.log("  >>>  http://localhost:3000  <<<");
  console.log("==========================================");
  console.log("  Login: dynastyreviewteam@gmail.com");
  console.log("  Pass:  824619");
  console.log("  2FA:   106904");
  console.log("==========================================");
});
