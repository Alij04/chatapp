import React from 'react'
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { IconButton } from '@mui/material';
function CreateGroups() {
    return (
        <div className='create-groups-container'>
            <input type="text" className='searchBox' placeholder='Enter Group Name' />
            <IconButton>
                <DoneOutlineIcon />
            </IconButton>
        </div>
    )
}

export default CreateGroups
