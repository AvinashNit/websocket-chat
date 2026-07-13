import { create } from "zustand";



const useMessageStore = create< {
    messages:string[],
    setmessage: ( event: string )=> void 
}>( ( set ) => (
     {
        messages: [],
        setmessage : ( event: string ) => 
                    set( state => ({
                        messages: [...state.messages ,event ]
                    }) )
        }
     
))





