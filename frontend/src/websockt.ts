import { useMessages } from "./message.store";

class websocket {
    private ws : WebSocket |  null = null;
    

    connect(){
        this.ws = new WebSocket("ws://localhost:3000/ws");
        this.ws.onopen = ()=>{
            console.log("connected")
        }

        this.ws.onmessage = ( message )=>{
            useMessages.getState().setMessages( message.toString() )
        }
    }

    send( message: string ){
        this.ws?.send( message )
    }
}

export const client = new websocket();