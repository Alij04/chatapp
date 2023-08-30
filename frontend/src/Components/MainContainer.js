import React from 'react'
import '../App.css'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
export default function MainContainer() {




    return (
        <div className='main-container'>
            <Sidebar />
            <Outlet />

        </div>
    )
}
