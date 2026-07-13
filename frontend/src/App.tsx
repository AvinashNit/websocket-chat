import { useEffect, useState } from "react";






export function App()
{
  const [ message, setMessage ] = useState("");
    useEffect(()=>{

    })
    return <div>
        <div>
          <input type="text" style={{
            width:"200px",
            border:"1px",
            borderColor:"black",
            height:"20px"
          }}/>
          <button onClick={ }  style={{ 
            border:"1px black",
            padding:"5px"
          }}>
            Send
          </button>
        </div>
        <div>
          {
            
          }
        </div>
    </div>
}