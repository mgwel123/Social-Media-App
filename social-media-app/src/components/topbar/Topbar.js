import React from 'react';
import './topbar.css';
import { Search, Person, Chat, CircleNotifications } from '@mui/icons-material';
import Navbar from 'react-bootstrap/Navbar';


export default function Topbar() {
    return (
        <Navbar className="container">
            <Navbar.Brand className="topbarLogo">
                <span className="logo">Social Social</span>
            </Navbar.Brand>
            <div className="topbarSearch">
                <div className="searchbar">
                    <Search className="searchIcon"/>
                    <input className="searchInput" placeholder="search for friends"/>
                </div>
            </div>
            <div className="topbarLinks">
                <div className="links">
                    <span class="topbarLink">Homepage</span>
                    <span class="topbarLink">Timeline</span>
                </div>
                <div className="icons">
                    <div className="iconItem">
                        <Person />
                        <span className="iconBadge">1</span>
                    </div>
                </div>
                <div className="icons">
                    <div className="iconItem">
                        <Chat />
                        <span className="iconBadge">3</span>
                    </div>
                </div>
                <div className="icons">
                    <div className="iconItem">
                        <CircleNotifications />
                        <span className="iconBadge">2</span>
                    </div>
                </div>
                <img src="/assets/person/1.jpeg" alt="" className="navbarImg"/>
            </div>
        </Navbar>
    )
}