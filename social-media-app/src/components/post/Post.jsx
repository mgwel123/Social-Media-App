import React from 'react';
import './post.css';
import { MoreVert } from '@mui/icons-material'


export default function Post() {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postUserPic" src="/assets/person/1.jpeg" alt=""/>
                    <span className="postUsername">Thor</span>
                    <span className="postDate">1 mins ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">More Beer!</span>
                <img className="postImg" src="/assets/posts/thor1.jpg" alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeButton" src="/assets/buttons/greenlike.png" alt=""/>
                    <img className="heartButton" src="/assets/buttons/heartbutton.png" alt=""/>
                    <span className="likeCounter">12 people like this</span>
                </div>
                <div className="postBottomRight">
                    <span className="commentText">9 comments</span>

                </div>
            </div>
        </div>
    </div>
  )
}
