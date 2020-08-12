import React from 'react';
import { Spring, animated } from 'react-spring/renderprops';
import Login from '../../components/Login/Login';
import Signup from '../../components/Signup/Signup';

class LandingPage extends React.Component {

    state = {
        float: true,
        login: true,
        intro: true,
    }

    toggleFloat = () => {
        this.setState({
            float: false
        })
    }

    toggleIntro = () => {
        console.log('toggled');
        this.setState({
            login: !this.state.login,
            intro: false
        })
    }

    handleLoginSuccess = () => {
        const { location, history } = this.props;
        const destination = (location.state || {}).from || '/home';
        history.push(destination);
    }

    render() {
        return (
            <main>
                {this.state.float ?
                    (
                        <div className="landing-container" onClick={this.toggleFloat}>
                            <div className="pointer text-center mb-5">v</div>
                            <img src='https://i.ibb.co/Zx5FnC6/balloon-transparent.png' className="landing-img" />
                        </div>
                    )
                    : (
                        <>
                            <Spring
                                from={{ opacity: 0 }}
                                to={{ opacity: 1 }}
                                config={{ duration: 1000, delay: 2000 }}
                            >
                                {props => (
                                    <div style={props}>
                                        <h1 className="landing-header1 center">Date</h1>
                                        <h1 className="landing-header2 center">Rush</h1>
                                    </div>
                                )}


                            </Spring>

                            <Spring
                                from={{ top: 300 }}
                                to={{ top: 10 }}
                                config={{ duration: 2000 }}
                            >
                                {props => (
                                    <div style={props} className="landing-container" onClick={this.toggleFloat}>
                                        {this.state.float && <div className="pointer text-center mb-5">v</div>}
                                        <img src='https://i.ibb.co/Zx5FnC6/balloon-transparent.png' className="landing-img" />
                                    </div>
                                )}

                            </Spring>
                            {this.state.login && <Signup  toggleIntro={this.toggleIntro} intro={this.state.intro}/>}
                            {!this.state.login && <Login toggleIntro={this.toggleIntro} onLoginSuccess={this.handleLoginSuccess}/>}
                        </>
                    )
                }

            </main>
        )
    }
}

export default LandingPage;