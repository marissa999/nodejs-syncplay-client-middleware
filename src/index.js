let app = require("express")();
let http = require("http").Server(app);
let io = require("socket.io")(http);

let connections = [];

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", function(socket) {
  console.log("a user connected.");
});

http.listen(8080, function() {
  console.log("listening on *:8080");
});
