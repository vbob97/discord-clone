import { Avatar } from '@mui/material'
import React from 'react'

import './Message.css'
function Message() {
  return (
    <div className='message'>
        <Avatar src="https://avatars.githubusercontent.com/u/48525256?v=4"/>
        <div className='message__info'>
          <h4>
            Vbob
            <span className='message__timestamp'>timestamp</span>
          </h4>
          <p>
            This is a message
          </p>
        </div>
    </div>

  )
}

export default Message