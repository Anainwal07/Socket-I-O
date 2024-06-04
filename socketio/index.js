import express from "express";
import { Server } from "socket.io";
import http from "http";
import path from "path";


const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
    const options = {
        root: path.join(process.cwd())
    };
    const fileName = 'index.html';
    res.sendFile(fileName, options); 
});

// var users = 0 ; 


//custom-namespace
var cnsp = io.of('/custom-namespace');

cnsp.on('connection' , (socket) => {
    console.log('A user connected');

    cnsp.emit('customEvent' , 'Tester event call') ; 
    
    // users++;
    // socket.emit('newUserConnect' , {message : ' HI Welcome dear'});

    // socket.broadcast.emit('newUserConnect' , {message: users + "users connected"}) ;

    socket.on('disconnect' , () => {
        console.log("A user disconnected") ; 

    //     users--;
    //     socket.broadcast.emit('newUserConnect' , {message : users + ' users connected'});
     })
}); 

server.listen(3000, () => {
    console.log("Server ready on PORT 3000");
});
