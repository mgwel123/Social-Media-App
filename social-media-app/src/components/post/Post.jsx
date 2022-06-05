import React from 'react';
import './post.css';
import { MoreVert } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'timeago.js';


export default function Post({post}) {
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState({});
    const Public = process.env.REACT_APP_PUBLIC_FOLDER;


    useEffect(()=> {
        const fetchUser = async () => {
          const res = await axios.get(`https://629a9968cf163ceb8d0c4820.mockapi.io/users/${post.userId}`);
          setUser(res.data)
        };
        fetchUser();
    },[post.userId])

    const likeHandler = () => {
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }

  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postUserPic" src={post.profilePicture || Public+"person/blank.jpg"} alt=""/>
                    <span className="postUsername">{post.username}</span>
                    <span className="postDate">{format(post.createdAt)}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className="postImg" src={Public+post.photo} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeButton"  src={`${Public}buttons/greenlike.png`} alt="" onClick={likeHandler}/>
                    <img className="heartButton" src={`${Public}buttons/heartbutton.png`} alt="" onClick={likeHandler}/>
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
