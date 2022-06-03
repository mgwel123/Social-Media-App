import React from 'react';
import './online.css'

export default function Online({user}) {
  const Public = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="onlineFriend">
        <div className="profileImgContainer">
            <img className="onlineProfileImg" src={Public+user.profilePicture} alt=""/>
            <span className="online"></span>
        </div>
        <span className="onlineUsername">{user.username}</span>
    </li>  
  )
}
