import React from 'react';
import './friend.css';


export default function Friend({user}) {
  const Public = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="sidebarFriend">
        <img className="sidebarFriendPic" src={Public+user.profilePicture} alt="" />
        <span className="sidebarFriendName">{user.username}</span>
    </li>
  )
}
