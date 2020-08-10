import React from 'react';
import { NavLink } from 'react-router-dom';
import TokenService from '../../services/token-service';
import DRContext from '../../context/DRContext';

class Nav extends React.Component {

    static contextType = DRContext;

    handleResetToDefault = () => {
        this.context.handleReset();
    }

    handleLogoutClick = () => {
        TokenService.clearAuthToken();
    }
    render() {
        return (
            <nav className="mobile-nav" role="navigation">
                <div id="menuToggle">

                    <input type="checkbox" />

                    <span></span>
                    <span></span>
                    <span></span>

                    <ul id="menu">
                        <li><NavLink to="/home" className="mob-nav-link" onClick={this.handleResetToDefault}>Home</NavLink></li>
                        <li><NavLink to="/profile" className="mob-nav-link" onClick={this.handleResetToDefault}>Profile</NavLink></li>
                        <li><NavLink to="/" className="mob-nav-link" onClick={this.handleLogoutClick}>Log Out</NavLink></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Nav;