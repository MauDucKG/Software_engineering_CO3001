var app = require("express")();
var http = require("http").createServer(app);
const io = require("socket.io")(http);
var port = process.env.PORT || 3000

app.get('/', function(req, res){
    res.sendFile(__dirname + '/indes.js');
}
);

io.on("connection", (socket) => {
  socket.on("message", ({ message, name }) => {
    const channel = "message";
    const message_save = new Msg({
      msg: message,
      user: name,
      channel: channel,
    });
    message_save.save().then(() => {
      io.emit("message", { name, message });
    });
  });
});

http.listen(port, function () {
  console.log("listening on: " + port);
});
