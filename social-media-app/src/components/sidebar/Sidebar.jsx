import React from 'react';
import './sidebar.css';
import { RssFeed, Event, Groups, Chat, Store, Bookmark } from '@mui/icons-material';
import Button from 'react-bootstrap/Button'
import Friend from '../friend/Friend';
import { Users } from '../STORE/mockdata'; 

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="wrapper">
                <ul className="sidebarList">
                    <li className="listItem">
                        <RssFeed className="icon"/>
                        <span className="listItemText">Feed</span>
                    </li>
                    <li className="listItem">
                        <Chat className="icon"/>
                        <span className="listItemText">Chat</span>
                    </li>
                    <li className="listItem">
                        <Groups className="icon"/>
                        <span className="listItemText">Communities</span>
                    </li>
                    <li className="listItem">
                        <Event className="icon"/>
                        <span className="listItemText">Events</span>
                    </li>
                    <li className="listItem">
                        <Store className="icon"/>
                        <span className="listItemText">Market</span>
                    </li>
                    <li className="listItem">
                        <Bookmark className="icon"/>
                        <span className="listItemText">Bookmarks</span>
                    </li>
                </ul>
                <Button className="sidebarButton" variant="outline-secondary">Show More</Button>
                <hr className="sidebarDivider"/>
                <ul className="sidebarFriendList">
                    {Users.map(u=> (
                        <Friend key={u.id} user={u} />
                    ))}
                    
                </ul>
            </div>
        </div>
    )
}