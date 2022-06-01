import React from 'react';
import './share.css';
import { PermMedia, Label, EmojiEmotions, Room  } from '@mui/icons-material'

export default function Share() {
  return (
    <div className="shareContainer">
        <div className="shareWrapper">
            <div className="shareFormTop">
                <img className="sharePic" src="/assets/person/1.jpeg" alt=""/>
                <input className="shareInput" placeholder="Tell the World" />
            </div>
            <hr className="shareHr"/>
            <div className="shareFormBottom">
                <div className="shareOptions">
                    <div className="share">
                        <PermMedia htmlColor='purple' className="shareIcon"/>
                        <span className="shareOptionText">Photo or Video</span>
                    </div>
                    <div className="share">
                        <EmojiEmotions htmlColor="orange" className="shareIcon"/>
                        <span className="shareOptionText">Emojis</span>
                    </div>
                    <div className="share">
                        <Room htmlColor="red" className="shareIcon"/>
                        <span className="shareOptionText">Share your Location</span>
                    </div>
                    <div className="share">
                        <Label htmlColor="blue" className="shareIcon"/>
                        <span className="shareOptionText">Tag</span>
                    </div>
                </div>
                <button className="shareButton">Share</button>
            </div>

        </div>
      
    </div>
  )
}
