import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const FriendDetail = () => {

    const {friendID} = useParams({});
    const[friend,setFriend]= useState({});
    const url =`https://jsonplaceholder.typicode.com/users/${friendID}`;
    const history = useHistory();

    useEffect(() =>{
      fetch(url)
      .then(res => res.json())
      .then(data => setFriend(data));
    },[])

    const handleclickall = ()=> {
        history.push("/friends");

    }
    return (
        <div>
            <h1>Friend Detail of: {friendID} </h1>
            <h2>{friend.name}</h2>
            <h3>{friend.email}</h3>
            <h4>{friend.website}</h4>
            <p>Work at: {friend.company?.name}</p>
            <br />
            <button onClick={handleclickall}>See All Friends</button>
        </div>
    );
};

export default FriendDetail;