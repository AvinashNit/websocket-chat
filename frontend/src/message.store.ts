import { create } from "zustand"

interface messageDATA {
    messages: string [],
    setMessages: ( message: string ) => void 
}


export const useMessages =  create< messageDATA >(( set )=>({
    messages: [],
    setMessages: ( message ) => set(( state )=>({
        messages : [...state.messages , message ]
    }))
}))