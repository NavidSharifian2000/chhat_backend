const express = require("express");
var http = require("http");
const app = express();
const port = 5000;
var server = http.createServer(app);
var io = require("socket.io")(server);

//middlewre
app.use(express.json());
var clients = {};

io.on("connection", (socket) => {
  console.log("connetetd");
  socket.emit("navid","navid")
  socket.on("message", (msg) => {
    socket.emit("message",msg+"sharifian");
  });
});

server.listen(port, "0.0.0.0", () => {
  console.log("server started");
});
