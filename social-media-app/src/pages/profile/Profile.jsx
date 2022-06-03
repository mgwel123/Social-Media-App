import React from 'react';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Rightbar from '../../components/rightbar/Rightbar';
import Feed from '../../components/feed/Feed';
import './profile.css';

export default function Profile() {
  return (
    <>
            <Topbar />
            <br/>
            <div class="profile"> 
                <Sidebar />                
                <div className="profileRight">
                    <div className="profileTopRight">
                        <div className="profileTop">
                            <img className="profileBannerPic" src="assets/posts/Asgard.jpg" alt=""/>
                            <img className="profileUserPic" src="assets/person/1.jpeg" alt=""/>
                        </div>
                        <div className="profileInfo">
                            <h3 className="profileInfoName">Thor Odinson</h3>
                            <span className="profileInfoText">The Strongest Avenger</span>
                        </div>
                    </div>
                    <div className="profileBottomRight">
                    <Feed />
                    <Rightbar profile/>
                    </div>
                    
                </div>
                
            </div>
            
        </>
  )
}
