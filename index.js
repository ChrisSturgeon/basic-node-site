const http = require('http');
const fs = require('fs');

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Get path from users request
    const path = req.url;

    // Read and write relevant html file, or return 404 if no matching path
    if (path === '/') {
      fs.readFile('index.html', (err, data) => {
        if (err) throw err;
        res.write(data);
        return res.end();
      });
    } else if (path === '/about') {
      fs.readFile('about.html', (err, data) => {
        if (err) throw err;
        res.write(data);
        return res.end();
      });
    } else if (path === '/contact-me') {
      fs.readFile('contact-me.html', (err, data) => {
        if (err) throw err;
        res.write(data);
        return res.end();
      });
    } else {
      fs.readFile('404.html', (err, data) => {
        if (err) throw err;
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
      });
    }
  })
  .listen(8080);
