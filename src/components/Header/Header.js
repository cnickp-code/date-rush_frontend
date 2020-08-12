import React from 'react';
import { NavLink } from 'react-router-dom';
import TokenService from '../../services/token-service';

class Header extends React.Component {

    handleLogoutClick = () => {
        console.log('logged out')
        TokenService.clearAuthToken();
    }
    render() {
        return (
            <header>
                {/* <div className="header-link">
                    <h1 className="text-center header-text">Date Rush</h1>
                </div> */}

                <div className="home-img-container">
                    <img src='https://i.ibb.co/Zx5FnC6/balloon-transparent.png' className="landing-img" />
                </div>

                <div className="home-header-container">
                    <h1 className="landing-header1 center">Date</h1>
                    <h1 className="landing-header2 center">Rush</h1>
                </div>
                <div className="header-nav text-center">
                    <NavLink to="/home" className="nav-btn"><i className="fas fa-home "></i></NavLink>
                    <NavLink to="/profile" className="nav-btn"><i className="fas fa-user-circle"></i></NavLink>
                    <NavLink to="/" className="nav-btn"><i className="fas fa-sign-out-alt nav-logout" onClick={this.handleLogoutClick}></i></NavLink>
                </div>
            </header>
        );
    }
}

export default Header;