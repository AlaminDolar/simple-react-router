import React from 'react';
import { Link,useHistory } from 'react-router-dom';

const Post = (props) => {
    const history =useHistory();
    const handle = ()=>{
        history.push(`/post/${id}`);

    }
    const {title,id} = props.post;
    return (
        <div>
            
            <h1>{title}</h1>
            <Link to={`/post/${id}`} >vist me</Link>
            <button onClick={handle}>Post Detail</button>
        </div>
    );
};

export default Post;