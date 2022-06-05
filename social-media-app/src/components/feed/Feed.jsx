import React, { useState, useEffect} from 'react';
import './feed.css';
import Share from '../share/Share';
import Post from '../post/Post';
import { Posts } from '../STORE/mockdata'
import axios from 'axios';


export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(()=> {
    const fetchPosts = async () => {
      const res = await axios.get("https://629a9968cf163ceb8d0c4820.mockapi.io/posts");
      setPosts(res.data)
    };
    fetchPosts();
  },[])
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p)=> (
          <Post key={p.id} post={p}/>
        ))}
      </div>
        
    </div>
  )
}
