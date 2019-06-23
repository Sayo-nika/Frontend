import * as React from 'react';
import Link from 'next/link';
import NavbarlessLayout from '../components/NavbarlessLayout';
import TextField, { HelperText, Input } from '@material/react-text-field';
import Checkbox from '@material/react-checkbox';
import Button from '@material/react-button';

import '@material/react-text-field/dist/text-field.css';
import '@material/react-checkbox/dist/checkbox.css';
import '@material/react-button/dist/button.css';

/** @jsx jsx*/
import { css, jsx } from '@emotion/core';

import loginBackground from '../assets/img/login-bg.jpg';
import logo from '../assets/img/logo.svg';

interface LoginProps {

}

interface LoginState {
  usernameFieldValue: string
  passwordFieldValue: string
  requestToRememberLogin: boolean
}

const loginContainerCss = css `
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-image: url("${ loginBackground }");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
`

const loginCardCss = css `
  background-color: white;
  border-radius: 8px;
  width: 450px;
  margin: auto;
  height: 100%;
  padding: 16px;
  box-shadow: 0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);

`

const loginHeaderImgContainerCss = css `
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`

const loginHeaderImg = css `
  height: 125px;
  width: auto;
`

const loginFormCss = css `
  padding: 40px;
  text-align: center;
  color: rgba(0,0,0,.54);

  a {
    color: #e84444;
  }
`

const spacer = css `
  flex-grow: 1;
`

const loginFormFlex = css `
  display: flex;
`

const caption = css `
  font-size: 12px;
`

class LoginPage extends React.Component<LoginProps, LoginState>{

  constructor(props: LoginProps) {
    super(props);

    this.state = {
      usernameFieldValue: "",
      passwordFieldValue: "",
      requestToRememberLogin: false
    }
  }

  updateUsernameField(usernameFieldValue: string) {
    this.setState({ usernameFieldValue });
  }

  //TODO: Find a secure way to store this!
  updatePasswordField(passwordFieldValue: string) {
    this.setState({ passwordFieldValue });
  }

  toggleRememberMeState(requestToRememberLogin: boolean) {
    this.setState({ requestToRememberLogin });
  }

  render() {
    return (
    <NavbarlessLayout title="Login | Sayonika">
      <div id="login-container" css={ loginContainerCss }>
        <div id="login-card" css={ loginCardCss }>
          <div id="login-header" css={ loginHeaderImgContainerCss }>
            <img src={ logo } css={ loginHeaderImg } alt="Sayonika"/>
          </div>
          <div id="login-form" css={ loginFormCss }>
            { /* 
                 The React MDC text field appears to hide labels when they are full-width. This
                 is noticable when instpecting the elements; the "no-label" class is applied and 
                 no label text appears.
                 
                 Is there a way around this that we can implement?
               */ }
            <TextField
                label="Username or Email"
                fullWidth
                helperText={ <HelperText>Username or Email</HelperText> }
                required
              >
                <Input
                  value={ this.state.usernameFieldValue }
                  onChange={ (e: any) => this.updateUsernameField(e.target.value) }
                />
            </TextField>
            <TextField
                label="Password"
                fullWidth
                helperText={ <HelperText>Password</HelperText> }
              >
                <Input
                  value={ this.state.passwordFieldValue }
                  onChange={ (e: any) => this.updatePasswordField(e.target.value) }
                />
            </TextField>
            <p css={ caption }>This site is protected by reCAPTCHA and the <a href="https://policies.google.com/privacy">Google Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.</p>
            <div css={ loginFormFlex }>
              <div>
                { /* It seems that the checkbox here is not lining up properly here. */ }
                <Checkbox
                  nativeControlId='my-checkbox'
                  checked={ this.state.requestToRememberLogin }
                  onChange={ (e: any) => this.toggleRememberMeState(e.target.checked) }
                />
                <label htmlFor='my-checkbox'>Remember me</label>
              </div>
              <div css={ spacer }/>
              <p><a href="#">Forgot password?</a></p>
            </div>
            <Button
              unelevated
            >
              Login
            </Button>
            <p>
              or <a href="#">sign up</a>
            </p>
          </div>
        </div>
      </div>
    </NavbarlessLayout>
    )
  }

}

export default LoginPage;
