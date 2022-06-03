import React from 'react';
import './rightbar.css';
import { Users } from '../STORE/mockdata';
import Online from '../online/Online';

export default function Rightbar({profile}) {

  const HomepageRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayPic" src="/assets/birthday/pinkcake.png" alt=""/>
          <span className="birthdayText">
            <b>Bruce Banner</b> and <b>2 others</b> have birthdays today
          </span>
        </div>
        <img className="adPlacement" src="/assets/ads/mockad.jpg" alt="See your advertisement here!"/>
        <h3 className="onlineTitle">Online Now</h3>
        <ul className="onlineFriends">
          {Users.map((u)=>(
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
      
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h3 className="rightbarTitle">Profile</h3>
        <div className="rightbarData">
          <div className="rightbarDataItem">
            <span className="rightbarDataKey">City:</span>
            <span className="rightbarDataValue">New Asgard</span>
          </div>
          <div className="rightbarDataItem">
            <span className="rightbarDataKey">From:</span>
            <span className="rightbarDataValue">Asgard</span>
          </div>
          <div className="rightbarDataItem">
            <span className="rightbarDataKey">Occupation:</span>
            <span className="rightbarDataValue">Avenger</span>
          </div>
        </div>
        <h3 className="rightbarTitle">Friends</h3>
        <div className="rightbarFriends">
          <div className="rightbarFriend">
            <img src="assets/person/2.jpg" alt="" className="rightbarFriendPic" />
            <span className="rightbarFriendName">Bruce Banner</span>
          </div>
          <div className="rightbarFriend">
            <img src="assets/person/3.jpg" alt="" className="rightbarFriendPic" />
            <span className="rightbarFriendName">Bruce Banner</span>
          </div>
          <div className="rightbarFriend">
            <img src="assets/person/4.jpg" alt="" className="rightbarFriendPic" />
            <span className="rightbarFriendName">Bruce Banner</span>
          </div>
          <div className="rightbarFriend">
            <img src="assets/person/5.jpg" alt="" className="rightbarFriendPic" />
            <span className="rightbarFriendName">Bruce Banner</span>
          </div>
        </div>
      </>
    );
  }
  return (
    <div className="rightbar">
        <div className="rightWrapper">
          <ProfileRightbar />
        </div>
    </div>
  )
}
