import React, { useState } from 'react'
import '../App.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import NightlightIcon from '@mui/icons-material/Nightlight';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import ConvserationItem from './ConvserationItem';
import { useNavigate } from 'react-router-dom';
function Sidebar() {
    const [conversations, setConversations] = useState(
        [
            {
                name: "User1",
                lastMessage: "Last Message",
                timeStamp: 'today'

            }, {
                name: "User2",
                lastMessage: "Last Message",
                timeStamp: 'today'
            },
            {
                name: "User 3",
                lastMessage: "Last Message",
                timeStamp: 'today'
            },

        ]
    )

    const navigate = useNavigate();
    return (
        <div className='sidebar'>
            <div className="sb-header">
                <div>
                    <IconButton>
                        <AccountCircleIcon />
                    </IconButton>
                </div>
                <div>
                    <IconButton onClick={() => {
                        navigate("users")
                    }}>
                        <PersonAddIcon />
                    </IconButton>
                    <IconButton onClick={() => {
                        navigate("groups")
                    }}>
                        <GroupAddIcon />
                    </IconButton>
                    <IconButton onClick={() => {
                        navigate("createGroup")
                    }}>
                        <AddCircleIcon />
                    </IconButton>
                    <IconButton>
                        <NightlightIcon />
                    </IconButton>
                </div>

            </div>
            <div className="sb-search">
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <input type="text" className='searchBox' placeholder='Search' />
            </div>
            <div className="sb-conversations">
                {conversations.map((conversation) => {
                    return <ConvserationItem props={conversation} key={conversation.name} />
                })}
            </div>
        </div>
    )
}

export default Sidebar
