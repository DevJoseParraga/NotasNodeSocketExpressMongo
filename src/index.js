
import path from "path";
import{ connectDB } from "./db"
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
import sockets from "./sockets";
connectDB()
const app = express();
const server = http.createServer(app);
const httpserver = server.listen(8000)
const io = socketIo(httpserver);
sockets(io)

app.use(express.static(path.join(__dirname, "public")))