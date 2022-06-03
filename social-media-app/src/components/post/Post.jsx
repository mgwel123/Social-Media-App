import React from 'react';
import './post.css';
import { MoreVert } from '@mui/icons-material'
import { Users } from '../STORE/mockdata'
import { useState } from 'react';


export default function Post({post}) {
    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);

    const likeHandler = () => {
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }

  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postUserPic" src={Users.filter(u=>u.id === post.userId)[0].profilePicture} alt=""/>
                    <span className="postUsername">{Users.filter(u=>u.id === post.userId)[0].username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className="postImg" src={post.photo} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeButton"  src="/assets/buttons/greenlike.png" alt="" onClick={likeHandler}/>
                    <img className="heartButton" src="/assets/buttons/heartbutton.png" alt="" onClick={likeHandler}/>
                    <span className="likeCounter">{like} poeple like this</span>
                </div>
                <div className="postBottomRight">
                    <span className="commentText">{post.comment} comments</span>

                </div>
            </div>
        </div>
    </div>
  )
}
