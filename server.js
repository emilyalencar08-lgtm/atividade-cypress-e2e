const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const PORT = process.env.PORT || 3000;
const htmlPath = path.join(__dirname, 'public', 'index.html');
http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/cadastro') {
    fs.readFile(htmlPath, (error, body) => {
      if (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Erro ao abrir a página.');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(body);
    });
    return;
  }
  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Página não encontrada.');
}).listen(PORT, () => console.log(`Aplicação disponível em http://localhost:${PORT}/cadastro`));
