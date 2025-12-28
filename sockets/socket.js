module.exports = (io) => {
  io.on("connection", (socket) => {
    socket.on("join", (data) => {
      socket.broadcast.emit("user-joined", data);
    });

    socket.on("disconnect", () => {
      socket.broadcast.emit("user-left");
    });
  });
};
