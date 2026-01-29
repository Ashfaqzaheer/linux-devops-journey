require("http").createServer((req, res) => {
  res.end(`Handled by PID ${process.pid}`);
}).listen(3000);
