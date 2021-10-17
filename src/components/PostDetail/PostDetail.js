import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const PostDetail = () => {
    const history =useHistory();
    const {postID}=useParams({});
    const[post,setPost] = useState({});
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`)
        .then(res => res.json())
        .then(data => setPost(data));
    },[]);

    const handleclick =()=>{
        history.push("/home");
    }
    
    return (
        <div>
            <h1>Post Detail: {postID}</h1>
           <h2> {post.title}</h2>
           <h4>{post.body}</h4>
           <br />
           <button onClick={handleclick}>See All Post</button>
        </div>
    );
};

export default PostDetail;