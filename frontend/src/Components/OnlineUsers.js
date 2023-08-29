import React, { useState } from 'react'
import logo from '../images/logo.png'
import User from './User'
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
function OnlineUsers() {

    const [users, setUsers] = useState
        ([
            {
                name: "User1"
            },
            {
                name: "User2"
            },
            {
                name: "User3"
            },
            {
                name: "User4"
            },
            {
                name: "User5"
            },
            {
                name: "User6"
            },
        ]
        )
    return (

        <div className='online-users-container'>

            <div className="ou-header">
                <img src={logo} alt="logo" style={{ height: "50px", marginLeft: "20px" }} />
                <p>Online Users</p>
            </div>
            <div className="sb-search">
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <input type="text" className='searchBox' placeholder='Search' />
            </div>
            {users.map((user) => {
                return <User props={user} key={user.name} />
            })}
        </div>
    )
}

export default OnlineUsers
