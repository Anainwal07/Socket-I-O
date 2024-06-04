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
// var cnsp = io.of('/custom-namespace');


// cnsp.on('connection' , (socket) => {
//     console.log('A user connected');

//     // cnsp.emit('customEvent' , 'Tester event call') ; 
    
//     socket.join()

//     // users++;
//     // socket.emit('newUserConnect' , {message : ' HI Welcome dear'});

//     // socket.broadcast.emit('newUserConnect' , {message: users + "users connected"}) ;

//     socket.on('disconnect' , () => {
//         console.log("A user disconnected") ; 

//     //     users--;
//     //     socket.broadcast.emit('newUserConnect' , {message : users + ' users connected'});
//      })
// }); 
var roomno = 1; 
var full = 0 ; 

io.on('connection', (socket) => {
    console.log('A user connected' ) ; 

    socket.join('room-' + roomno) ;

    io.sockets.in('room-' + roomno).emit('connectedRoom' , "You are connected to room no " + roomno) ;

    full++ ; 
    if(full >= 2){
        full = 0 ; 
        roomno++ ; 
    }

    socket.on('disconnect' , () => {
        console.log('A user disconnected') ; 
    }) ; 
});

server.listen(3000, () => {
    console.log("Server ready on PORT 3000");
});
