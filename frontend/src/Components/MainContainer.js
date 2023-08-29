import React from 'react'
import '../App.css'
import Sidebar from './Sidebar'
import ChatArea from './ChatArea'
import Welcome from './Welcome'
import CreateGroups from './CreateGroups'
import OnlineUsers from './OnlineUsers'
export default function MainContainer() {

    const conversations = {
        name: "User1",
        lastMessage: "Last Message",
        timeStamp: 'today'

    }


    return (
        <div className='main-container'>
            <Sidebar />
            {/* <CreateGroups /> */}
            {/* <Welcome /> */}
            {/* <ChatArea props={conversations} /> */}
            <OnlineUsers />
        </div>
    )
}
