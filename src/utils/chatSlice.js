import { createSlice } from "@reduxjs/toolkit";
import {LIVE_CHAT_COUNT} from "../utils/constant"

const chatslice = createSlice({
    name: "chat",
    initialState:{
        message: [] // array becoz it will store lots of user's icon, name and commnet 
    },
    reducers:{
        addComment: (state,action)=>{
            state.message.splice(LIVE_CHAT_COUNT,1)
            state.message.unshift(action.payload)
        }
    }
})

export const {addComment} = chatslice.actions
export default chatslice.reducer;