import React, { useState } from 'react'
import logo from '../images/logo.png'
import User from './User'
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
function Groups() {

    const [groups, setGroups] = useState
        ([
            {
                name: "Group1"
            },
            {
                name: "Group2"
            },
            {
                name: "Group3"
            },
            {
                name: "Group4"
            },
            {
                name: "Group5"
            },
            {
                name: "Group6"
            },
        ]
        )
    return (

        <div className='online-users-container'>

            <div className="ou-header">
                <img src={logo} alt="logo" style={{ height: "50px", marginLeft: "20px" }} />
                <p>Available Groups</p>
            </div>
            <div className="sb-search">
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <input type="text" className='searchBox' placeholder='Search' />
            </div>
            {groups.map((group) => {
                return <User props={group} key={group.name} />
            })}
        </div>
    )
}

export default Groups
