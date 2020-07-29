import React from 'react';

class Signup extends React.Component {
    render() {
        return (
            <div className="form-box-ls center">
                <form className="main-form">
                  <h1>Sign up</h1>
                  <fieldset className="login-info">
                    <h4>Username</h4>
                    <input placeholder="" type="text" name="email" id="email" className="text-input center" required />
                    <h4>Email</h4>
                    <input placeholder="" type="text" name="email" id="email" className="text-input center" required />
                    <h4>Password</h4>
                    <input type="text" name="password" id="password" placeholder="" className="text-input center" required />
                    <h4>Repeat Password</h4>
                    <input type="text" name="repeat-password" id="repeat-password" placeholder="" className="text-input center"
                      required />
                  </fieldset>
                  <button type="submit">Sign Up</button>
                </form>
                <div className="login-box center">
                  <p>Already have an account? <a href="/login">Log in</a></p>
                </div>
              </div>
        )
    }
}

export default Signup;