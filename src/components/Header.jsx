import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import CartBtn from './buttons/CartBtn'
import PersonalAccountBtn from './buttons/PersonalAccountBtn'
import Login from './buttons/Login'
import Signup from './buttons/Signup'

export var e='';
export var setset=false;

const Header = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userEmail, setUserEmail] = useState('');

    const handleLogin = (email) => {
        setIsAuthenticated(true);
        setUserEmail(email);
        e=email;
        setset=true;
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        setUserEmail('');
    };
    
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid py-2">
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link fw-bold" aria-current="page" to="/">Головна</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/products">Товари</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">Про нас</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Зворотній звязок</NavLink>
                        </li>
                    </ul>
                <NavLink className="navbar-brand mx-auto fw-bold" to="/">E-SPORT</NavLink>
                {!isAuthenticated && (
                    <div>
                        <button className="btn"><Login onLogin={handleLogin}/></button>
                        <button className="btn"><Signup/></button>
                    </div>
                )}
                {isAuthenticated && (
                    <div>
                    <PersonalAccountBtn userEmail={userEmail}/>
                    <CartBtn/>
                    <NavLink to={`/home`}>
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={handleLogout}
                        >
                            <span className="fa fa-sign-out me-1"></span>Вийти
                        </button>
                    </NavLink>
                    </div>
                )}
                </div>
            </div>
        </nav>
    </>
    )
}

export default Header