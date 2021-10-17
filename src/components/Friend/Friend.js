import React from 'react';
import { Link ,useHistory} from 'react-router-dom';

const Friend = (props) => {
    const history = useHistory();
    
    const friendstyle = {
        border: '3px solid blue',
        padding:'10px',
        borderRadius: '10px'
    }
    const {name,email,address,phone,website,id}=props.friend;
    const url = `/friend/${id}`;
    const handleclick = () =>{
        history.push(url);

    }
    return (
        <div style={friendstyle}>
            <h2>I am: {name} {id}</h2>
            <h2>My email: {email}</h2>
            <p>Contact me: {phone}</p>
            <p>Visit me: {website}</p>
            <p>I am live in: {address.city}</p>
            <Link to={url} >Visit me</Link>
            <br />
            <Link to={url}>
            <button>Visit me</button>
            </Link>
            <br />
            <button onClick={handleclick}>visit me 2</button>

            
        </div>
    );
};

export default Friend;