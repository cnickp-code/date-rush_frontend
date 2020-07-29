import React from 'react';

class Login extends React.Component {
    render() {
        return (
            <div className="form-box-ls center">
                <form className="main-form">
                    <h1>Log In</h1>
                    <fieldset className="login-info">
                        <h4>Email</h4>
                        <input placeholder="" type="text" name="email" id="email" className="text-input center" required />
                        <h4>Password</h4>
                        <input type="text" name="password" id="password" placeholder="" className="text-input center" required />
                    </fieldset>
                    <button type="submit">Log In</button>
                </form>
            </div>
        )
    }
}

export default Login;