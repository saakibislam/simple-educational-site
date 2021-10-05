import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="p-3 fs-4 d-flex justify-content-between align-items-center">
            <img src="https://i.ibb.co/VCSmFW0/logo.png" alt="" />
            <div>
            <NavLink className="mx-3 text-decoration-none" to="/home" activeStyle={{fontWeight: "bold", color:'#FF4311'}}>Home</NavLink>
            <NavLink className="mx-3 text-decoration-none" to="/courses" activeStyle={{fontWeight:'bold', color:'#FF4311'}}>Courses</NavLink>
            <NavLink className="mx-3 text-decoration-none" to="/contact" activeStyle={{fontWeight:'bold', color:'#FF4311'}}>Contact</NavLink>
            <NavLink className="mx-3 text-decoration-none" to="/about" activeStyle={{fontWeight:'bold', color:'#FF4311'}}>About</NavLink>
            </div>
        </div>
    );
};

export default Header;