import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const style={
        fontWeight: "bold",
        color: "red",
        
        
      }

    
    return (
        <nav>
            <NavLink  to="/home" activeStyle={style}>Home</NavLink>
            <NavLink to="/friends" activeStyle={style}>Friends</NavLink>
            <NavLink to="/about" activeStyle={style}>About</NavLink>
            <NavLink to="/about/culture" activeStyle={style}>Culture</NavLink>
        </nav>
    );
};

export default Header;