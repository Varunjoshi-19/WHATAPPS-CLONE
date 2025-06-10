import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import http from "http";
import AuthRoute from "./routes/AuthRoutes";
import { Server, Socket } from "socket.io";


declare global {
    var onlineUsers: Map<string, any>
    var chatSocket: Socket;
}

global.onlineUsers = new Map();

function CreateServer() {

    dotenv.config();
    const app = express();
    const server = http.createServer(app);
    const port = process.env.PORT;

    // middlewares 
    app.use(cors({
        origin: "http://localhost:3000",
        methods: ['POST', 'GET', 'DELETE', 'PUT'],
        credentials: true
    }));
    app.use(express.json());


    // Routes 
    app.use("/api/auth", AuthRoute);


   



    server.listen(port, () => {
        console.log(`server running on port ${port}`)
    })

}

CreateServer();