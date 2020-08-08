import React from 'react';
import { Spring } from 'react-spring/renderprops';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';

class Login extends React.Component {
    state = {
        error: null
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            error: null,
        })

        const { user_name, password } = event.target

        AuthApiService.postLogin({
            user_name: user_name.value,
            password: password.value
        })
            .then(res => {
                user_name.value = '';
                password.value = '';
                TokenService.saveAuthToken(res.authToken);
                this.props.onLoginSuccess();
            })
            .catch(res => {
                this.setState({ error: res.error })
            })

    }

    toggleLanding = () => {
        console.log('toggled')
        this.props.toggleIntro();
    }

    render() {
        const { error } = this.state;

        return (
            <>
                {
                    this.props.intro ?
                        (
                            <Spring
                                from={{ opacity: 0 }}
                                to={{ opacity: 1 }}
                                config={{ delay: 2000, duration: 1000 }}
                            >
                                {props => (
                                    <div style={props} className="form-box-ls center">
                                        <form className="main-form" onSubmit={this.handleSubmit}>
                                            <div role='alert'>
                                                {error && <p className='error'>{error}</p>}
                                            </div>
                                            <h1>Welcome Back</h1>

                                            <fieldset name="login-info">
                                                <h4 className="mb-10">Username</h4>
                                                <input
                                                    placeholder=""
                                                    type="text"
                                                    name="user_name"
                                                    id="user_name"
                                                    className="text-input center"
                                                    required
                                                />
                                                <h4 className="mb-10">Password</h4>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    id="password"
                                                    placeholder=""
                                                    className="text-input center"
                                                    required
                                                />
                                            </fieldset>
                                            <button type="submit" className="form-submit-button">Submit</button>
                                        </form>
                                        <div className="login-box center">
                                            <p>
                                                Don't have an account? {' '}
                                <span className="landing-link" onClick={this.toggleLanding}>Sign up!</span>
                                            </p>
                                        </div>
                                    </div>
                                )}

                            </Spring>
                        )
                        : (
                            <Spring
                                from={{ opacity: 0 }}
                                to={{ opacity: 1 }}
                            >
                                {props => (
                            <div style={props} className="form-box-ls center">
                                <form className="main-form" onSubmit={this.handleSubmit}>
                                    <div role='alert'>
                                        {error && <p className='error'>{error}</p>}
                                    </div>
                                    <h1>Welcome Back</h1>

                                    <fieldset name="login-info">
                                        <h4 className="mb-10">Username</h4>
                                        <input
                                            placeholder=""
                                            type="text"
                                            name="user_name"
                                            id="user_name"
                                            className="text-input center"
                                            required
                                        />
                                        <h4 className="mb-10">Password</h4>
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            placeholder=""
                                            className="text-input center"
                                            required
                                        />
                                    </fieldset>
                                    <button type="submit" className="form-submit-button">Submit</button>
                                </form>
                                <div className="login-box center">
                                    <p>
                                        Don't have an account? {' '}
                                        <span className="landing-link" onClick={this.toggleLanding}>Sign up!</span>
                                    </p>
                                </div>
                            </div>
                            )}
                            </Spring>
                        )
                }
            </>

        )
    }
}

export default Login;