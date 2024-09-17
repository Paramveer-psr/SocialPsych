import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { createServer } from "http";
import { Server } from "socket.io";
import { app } from "./app.js";

dotenv.config();

connectDB()
  .then(() => {
    const server = createServer(app);
    const io = new Server(server, {
      cors: {
        origin: "http://localhost:5173",
        credentials: true,
      },
    });

    io.on("connection", (socket) => {
      console.log("A user connected", socket.id);

      socket.on("like", (postId) => {
        console.log("Like event received for post: ", postId);
        io.emit("like", postId);
      });

      socket.on("comment", (postId) => {
        console.log("Comment event received for post: ", postId);
        io.emit("comment", postId);
      });

      socket.on("disconnect", () => {
        console.log("User disconnected");
      });
    });

    server.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on PORT: ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.error("Connection Failed ", err);
  });
