import React from 'react';
import './online.css'

export default function Online({user}) {
  return (
    <li className="onlineFriend">
        <div className="profileImgContainer">
            <img className="onlineProfileImg" src={user.profilePicture} alt=""/>
            <span className="online"></span>
        </div>
        <span className="onlineUsername">{user.username}</span>
    </li>  
  )
}
