import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';

const Header = () => {
    // "https://i.ibb.co/VCSmFW0/logo.png"
    return (
        <div className="px-4 fs-4 d-flex justify-content-between align-items-center">
            <a href='/home'><img style={{ height: '80px', marginLeft: '35px' }} src={logo} alt="" /></a>
            <div>
                <NavLink className="mx-3 text-decoration-none text-dark" to="/home" activeStyle={{ fontWeight: "bold"}}>Home</NavLink>
                <NavLink className="mx-3 text-decoration-none text-dark" to="/courses" activeStyle={{ fontWeight: 'bold'}}>Courses</NavLink>
                <NavLink className="mx-3 text-decoration-none text-dark" to="/contact" activeStyle={{ fontWeight: 'bold'}}>Contact</NavLink>
                <NavLink className="mx-3 text-decoration-none text-dark" to="/about" activeStyle={{ fontWeight: 'bold'}}>About</NavLink>
            </div>
        </div>
    );
};

export default Header;