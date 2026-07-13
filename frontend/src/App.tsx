import { useEffect, useState } from "react"

import { client } from "./websockt"
import { useMessages } from "./message.store";

export function App()
{
  const [ message, setmessage ] = useState("");
  const messages = useMessages( ).messages;

  useEffect(()=>{
      client.connect()
  },[])

   return <div className="text-center">
      <input type="text" className="w-100 h-20 border rounded-2xl pl-10 mt-20"  placeholder="enter your text here " onChange={(e )=> setmessage( e.target.value )}/>
      <button className="w-20 px-2 py-4 border rounded-2xl cursor-pointer hover:bg-amber-200"
       onClick={ ()=> {
        client.send( message )
        setmessage("")
       }
        }> send </button>
      <div>
        {
          messages.map( mess => <p>
            {mess}
          </p> )
        }
      </div>
   </div>
}