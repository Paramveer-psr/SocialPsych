import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import dotenv from "dotenv";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

import userRouter from "./routes/user.routes.js";
app.use("/api/auth", userRouter);

import postRouter from "./routes/post.routes.js";
app.use("/api/posts", postRouter);

import chatRouter from "./routes/chat.routes.js";
app.use("/api/chat", chatRouter);

export { app };
