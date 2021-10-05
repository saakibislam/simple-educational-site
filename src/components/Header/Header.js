import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="bg-light p-3 fs-4">
            <NavLink className="mx-3 text-decoration-none text-dark" to="/home" activeStyle={{fontWeight: "bold",color: "red"}}>Home</NavLink>
            <NavLink className="mx-3 text-decoration-none text-dark" to="/courses" activeStyle={{fontWeight: "bold",color: "red"}}>Courses</NavLink>
            <NavLink className="mx-3 text-decoration-none text-dark" to="/contact" activeStyle={{fontWeight: "bold",color: "red"}}>Contact</NavLink>
            <NavLink className="mx-3 text-decoration-none text-dark" to="/about" activeStyle={{fontWeight: "bold",color: "red"}}>About</NavLink>
        </div>
    );
};

export default Header;