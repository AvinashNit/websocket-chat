import http from "http";
import { WebSocketServer } from "ws"

const server  =  http.createServer();


const wss  =  new WebSocketServer({
    server,
    path:"/ws",
    
})

wss.on("connection", ( ws , req )=>{
    console.log("  A user connected ");
    console.log( req.url );
    ws.onmessage = ( message )=>{
            wss.clients.forEach( client => client.send( message.data  ))
    }
})



server.listen( 3000 , ()=>{
    console.log("Server running over 3000 ")
})


