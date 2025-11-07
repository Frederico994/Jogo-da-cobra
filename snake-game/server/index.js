const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;
const baseDir = path.join(__dirname, ".."); // pasta raiz do projeto

const server = http.createServer((req, res) => {
  let filePath = path.join(baseDir, req.url === "/" ? "index.html" : req.url);

  // Detecta tipo de conteúdo
  const ext = path.extname(filePath);
  let contentType = "text/html";
  switch (ext) {
    case ".js":
      contentType = "application/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
    case ".jpeg":
      contentType = "image/jpeg";
      break;
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 - Not Found");
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content);
    }
  });
});

server.listen(PORT, () => {
  console.log(`🚀 Servidor Snake Game a correr em: http://localhost:${PORT}`);
});
