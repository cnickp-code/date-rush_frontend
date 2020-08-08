import React from 'react';
import { Spring } from 'react-spring/renderprops';
import AuthApiService from '../../services/auth-api-service';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.password = React.createRef();
    this.state = {
      error: null,
      userNameError: null,
      emailError: null,
      passwordError: null,
      repeatPasswordError: null
    }
  }



  handleRegistrationSubmit = (event) => {
    event.preventDefault();
    const { user_name, email, password, repeat_password } = event.target;
    const date_created = new Date();

    this.setState({ error: null })

    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value,
      email: email.value,
      date_created: date_created
    })
      .then(user => {
        user_name.value = '';
        password.value = '';
        email.value = '';
        repeat_password.value='';
        // this.props.onRegistrationSuccess();
        this.props.toggleIntro();
      })
      .catch(res => {
        this.setState({
          error: res.error
        })
      })
  }

  handleUserNameError = (event) => {
    let userName = event.target.value;

    if (userName.length === 0) {
      this.setState({
        passwordError: null
      })
    }

    if (userName.length < 3) {
      this.setState({
        userNameError: "Username must be at least 3 characters",

      })
    } else {
      this.setState({
        userNameError: null
      })
    }
  }

  handlePasswordError = (event) => {
    let password = event.target.value;
    const regexp_password = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])[\S]+/;

    if (password.length === 0) {
      this.setState({
        passwordError: null
      })
    }

    if (password.length < 8) {
      this.setState({
        passwordError: 'Password must be longer than 8 characters'
      })
    }
    if (password.length > 72) {
      this.setState({
        passwordError: 'Password must be shorter than 72 characters'
      })
      return
    }
    if (password.startsWith(' ') || password.endsWith(' ')) {
      this.setState({
        passwordError: `Password must not start or end with empty spaces`
      })
    }
    if (!regexp_password.test(password)) {
      this.setState({
        passwordError: `Password must contain 1 upper case, lower case, number, and special character`
      })
    } else {
      this.setState({
        passwordError: null
      })
    }
  }

  handleRepeatPasswordError = (event) => {
    const repeatPassword = event.target.value;


    if (repeatPassword.length === 0) {
      this.setState({
        passwordError: null
      })
    }

    if (repeatPassword !== this.password.current.value) {
      this.setState({
        repeatPasswordError: `Does not match`
      })
    } else {
      this.setState({
        repeatPasswordError: null
      })
    }
  }

  handleEmailError = (event) => {
    const email = event.target.value
    const regexp_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email.length === 0) {
      this.setState({
        emailError: null
      })
    }
    if (!regexp_email.test(email)) {
      this.setState({
        emailError: `Invalid email`
      })
    } else {
      this.setState({
        emailError: null
      })
    }

  }

  toggleLanding = () => {
    console.log('toggled')
    this.props.toggleIntro();
  }

  render() {
    const { error, userNameError, emailError, passwordError, repeatPasswordError } = this.state;
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
      >
        {props => (
          <div style={props} className="form-box-ls center">
            <form className="main-form" onSubmit={this.handleRegistrationSubmit}>
              <div role='alert'>
                {error && <p className='error center'>{error}</p>}
              </div>
              <h1>Sign up</h1>
              <fieldset name="login-info">
                <h4>Username</h4>
                <input
                  placeholder=""
                  type="text"
                  name="user_name"
                  id="user_name"
                  className="text-input center"
                  onChange={this.handleUserNameError}
                  required
                />
                {userNameError && <p className='error center'>{userNameError}</p>}

                <h4>Email</h4>
                <input
                  placeholder=""
                  type="text"
                  name="email"
                  id="email"
                  className="text-input center"
                  onBlur={this.handleEmailError}
                  required
                />
                {emailError && <p className='error center'>{emailError}</p>}

                <h4>Password</h4>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder=""
                  className="text-input center"
                  onChange={this.handlePasswordError}
                  ref={this.password}
                  required
                />
                {passwordError && <p className='error center'>{passwordError}</p>}

                <h4>Repeat Password</h4>
                <input
                  type="password"
                  name="repeat_password"
                  id="repeat_password"
                  placeholder=""
                  className="text-input center"
                  onBlur={this.handleRepeatPasswordError}
                  required
                />
                {repeatPasswordError && <p className='error center'>{repeatPasswordError}</p>}

              </fieldset>
              <button type="submit" className="form-submit-button">Register</button>
            </form>
            <div className="login-box center">
              <p>Already have an account? {' '}
                <span className="landing-link" onClick={this.toggleLanding}>Log in!</span>
              </p>
            </div>
          </div>
        )}
      </Spring>
    )
  }
}

export default Signup;