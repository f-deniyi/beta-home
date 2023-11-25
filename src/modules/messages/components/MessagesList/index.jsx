import React from 'react'
import Message from './Message'
const MessagesList = ({ channels, userId,setChannel }) => {
  
  return (
    <div className='h-full overflow-scroll'>
      {
        channels?.map(el =>
          <Message chat={el} userId={userId} setChannel={setChannel} />
        )
      }

      {/* <Message />
      <Message />
      <Message /> */}

    </div>
  )
}

export default MessagesList