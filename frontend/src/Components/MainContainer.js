import React from 'react'
import '../App.css'
import Sidebar from './Sidebar'
import ChatArea from './ChatArea'
import Welcome from './Welcome'
import CreateGroups from './CreateGroups'
import OnlineUsers from './OnlineUsers'
import { Outlet } from 'react-router-dom'
export default function MainContainer() {




    return (
        <div className='main-container'>
            <Sidebar />
            <Outlet />

        </div>
    )
}
