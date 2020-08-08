import React from 'react';

class Header extends React.Component {
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
            </header>
        );
    }
}

export default Header;