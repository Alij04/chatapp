import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';
import MessageOthers from './MessageOthers';
import MessageSelf from './MessageSelf';
function ChatArea() {

    const props = {
        name: "User1",
        lastMessage: "Last Message",
        timeStamp: 'today'

    }



    return (
        <div className='chat-area'>
            <div className="ca-header">

                <div className="ca-header-left">
                    <p className='con-icon'>{props.name[0]}</p>
                    <div className='ca-header-left-b'>
                        <p className='con-title'>{props.name}</p>
                        <p className='con-timeStamp'>{props.timeStamp}</p>
                    </div>
                </div>

                <div>
                    <IconButton>
                        <DeleteOutlineIcon />
                    </IconButton>

                </div>
            </div>
            <div className="ca-messages">

                <MessageOthers />
                <MessageSelf />
                <MessageOthers />
                <MessageSelf /> <MessageOthers />
                <MessageSelf />
            </div>
            <div className="ca-searchBox">
                <input type="text" placeholder='Type a message' className='searchBox' />
                <IconButton>
                    <SendIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default ChatArea
