import React from 'react';
import './home.css';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Rightbar from '../../components/rightbar/Rightbar';
import Feed from '../../components/feed/Feed';

export default function Home() {
    return(
        <>
            <Topbar />
            <br/>
            <div className="pageContainer">
                <Sidebar />
                <Feed />
                <Rightbar />
            </div>
            
        </>
        
    )
}