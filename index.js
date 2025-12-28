const express = require("express");
const http = require("http");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Create HTTP server
const server = http.createServer(app);

// Socket.io setup
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

// Socket events
require("./sockets/socket")(io);

// Routes
app.use("/api/auth", require("./routes/auth.routes"));

app.use("/api/projects", require("./routes/project.routes"));
app.use("/api/workspaces", require("./routes/workspace.routes"));
app.use("/api/jobs", require("./routes/job.routes"));

// DB connect
connectDB();

// Start server 
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});
