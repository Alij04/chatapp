import React from 'react'

function User({ props }) {
    return (
        <div className='user-style'>
            <p className='con-icon'>{props.name[0]}</p>
            <p  >{props.name}</p>
        </div>
    )
}

export default User
