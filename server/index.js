const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
require("dotenv").config()

app.use(cors());

const { Server } = require("socket.io");

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    }
})

server.listen(process.env.PORT, ()=>{
    console.log("listening on ", process.env.PORT)
})