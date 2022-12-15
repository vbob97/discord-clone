import React,{useEffect,useState} from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { useSelector } from 'react-redux';
import {   collection,onSnapshot ,orderBy, query,addDoc ,serverTimestamp} from "firebase/firestore";

import './Chat.css'
import ChatHeader from './ChatHeader'
import Message from './Message'
import {selectUser} from './features/userSlice'
import {selectChannelId,selectChannelName,} from './features/appSlice'
import db from './firebase';


function Chat() {
  const user = useSelector(selectUser);
  const channelId= useSelector(selectChannelId);
  const channelName= useSelector(selectChannelName);
  const [input,setInput] =useState("")
  const [messages,setMessages] = useState([]);

  useEffect(() => {
   
      const ref = collection(db, "channels", channelId, "messages");
      const q = query(ref,orderBy("timestamp","desc"));
      onSnapshot(q,(snapshot)=>{
        setMessages(
        snapshot.docs.map((doc)=> doc.data()))
      })
   
  }, [channelId])

  const sendMessage  = e =>{
    e.preventDefault();
    console.log(channelId);
    addDoc(collection(db, "channels", channelId, "messages"), 
    {
      timestamp: serverTimestamp(),
      message:input,
      useer:user
    });
    setInput("");
  }
  return (
    <div className='chat'>
      <ChatHeader channelName={channelName}/>

      <div className='chat__messages'>
        {messages.map((message)=>(
          <Message 
            timestamp={message.timestamp}
            message={message.message}
            user={message}
          />
        ))}
        
      </div>
      <div className='chat__input'>
        <AddCircleIcon fontSize="large"/>
        <form>
          <input 
           value={input}
           disabled={!channelId}
           onChange={(e)=>setInput(e.target.value)}
           placeholder={`Message #${channelName ? channelName : ""} `} 
           />
          <button 
            disabled={!channelId}
            className='chat__inputButton'
            type='submit'
            onClick={sendMessage}
            >
            Send Message
          </button>
        </form>

        <div className='chat__inputIcons'>
          <CardGiftcardIcon fontSize="large" />
          <GifIcon fontSize="large" />
          <EmojiEmotionsIcon fontSize="large" />
        </div>
      </div>
    </div>
  )
}

export default Chat