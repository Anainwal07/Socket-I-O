import express from "express";
import { Server } from "socket.io";
import http from "http";
import path from "path";


const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer);

app.get("/", (req, res) => {
    const options = {
        root: path.join(process.cwd())
    };
    const fileName = 'index.html';
    res.sendFile(fileName, options); 
});

io.on('connection' , function(socket){
    console.log('A user connected');
    
    // setTimeout(() =>{
        
    //     socket.emit('myCustomEvent' , {description: 'A custom message from server side !'});

    // } , 3000) ;
    
    socket.on('myCustomEventFromClientSide' , (data) => {
        console.log(data);
    })

    socket.on('disconnect' , () => {
        console.log('A user disconnected');
    })
}); 

httpServer.listen(3000, () => {
    console.log("Server ready on 3000");
});
