import React from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return (
            <nav className="mobile-nav" role="navigation">
                <div id="menuToggle">

                    <input type="checkbox" />

                    <span></span>
                    <span></span>
                    <span></span>

                    <ul id="menu">
                        <li><NavLink to="/" className="mob-nav-link">Home</NavLink></li>
                        <li><NavLink to="/qb-activity" className="mob-nav-link">Activities</NavLink></li>
                        <li><NavLink to="/qb-meals" className="mob-nav-link">Food</NavLink></li>
                        <li><NavLink to="/qb-drinks" className="mob-nav-link">Drinks</NavLink></li>
                        <li><NavLink to="/qb-movies" className="mob-nav-link">Movies</NavLink></li>
                        <li><NavLink to="/qb-summary" className="mob-nav-link">Summary</NavLink></li>
                        <li><NavLink to="/profile" className="mob-nav-link">Profile</NavLink></li>
                        <li><NavLink to="/profile-summary" className="mob-nav-link">Profile Summary</NavLink></li>
                        <li><NavLink to="/login" className="mob-nav-link">Login</NavLink></li>
                        <li><NavLink to="/signup" className="mob-nav-link">Signup</NavLink></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Nav;