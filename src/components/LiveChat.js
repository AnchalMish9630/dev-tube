import React, { useEffect, useState } from "react";
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../utils/chatSlice";
import {getYouTubeUserName, getLiveChatMsg } from "../utils/liveChatUtils"

const LiveChat = () => {


  const dispatch = useDispatch();
  const[message, setMessage] = useState("");
  const chatMsg = useSelector((store)=>
    store.chat.message
  )
  console.log("Ky data aaya??? ", chatMsg);
  useEffect(()=>{
    const timer = setInterval(() => {
      dispatch(addComment({
        userName: getYouTubeUserName(),
        commentMsg: getLiveChatMsg()
      }))
    }, 2000);
    return ()=>{
      clearInterval(timer);
    }
  },[dispatch])
  return (
    <>
    <div className="w-full h-[650px] ml-4 mr-8 p-2 border border-black overflow-y-scroll flex flex-col-reverse ">
      {chatMsg.map((msg, index)=>{
        return(
           <ChatMessage 
           key={index}
        userName={msg.userName}
        commentMsg={msg.commentMsg}
      />
        )
      })
       
      }
    </div>
   <form onSubmit={(e)=> e.preventDefault()}
      className="ml-2 p-2 w-full "
    >
    <input
      className="pl-2 py-1 rounded-3xl border border-gray-300 "
      type="text"
      placeholder="Chat..."
      value={message}
      onChange={(e)=>{
        setMessage(e.target.value);
      }}
    
    />
      <button className="border-black px-2 mx-2"
      onClick={()=>{
         if (message.trim() === "") return;
        dispatch(addComment({
        userName: "anchalmish@890",
        commentMsg: message
      }))
      setMessage("");
      }}>
        Submit
      </button>

   </form>
    </>
  );
};

export default LiveChat;

// first create liveChat and msg component 
// now store your single comment in store by creating a chatslice




const liveChat = ()=>{

  return <>
    first we will pss props if it is coming from some other component 
    for definng props , we need to defince its type , if we are using typscript.
    then 
  </>

}
export default liveChat;