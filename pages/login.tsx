import * as React from 'react';
import Link from 'next/link';
import NavbarlessLayout from '../components/NavbarlessLayout';

import { Button, TextField, Checkbox, FormControlLabel } from "@material-ui/core";

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
    const { usernameFieldValue, passwordFieldValue, requestToRememberLogin } = this.state;
    return (
    <NavbarlessLayout title="Login | Sayonika">
      <div id="login-container" css={ loginContainerCss }>
        <div id="login-card" css={ loginCardCss }>
          <div id="login-header" css={ loginHeaderImgContainerCss }>
            <img src={ logo } css={ loginHeaderImg } alt="Sayonika"/>
          </div>
          <div id="login-form" css={ loginFormCss }>
            <TextField
              value={ usernameFieldValue }
              label="Username or email"
              fullWidth
              onChange={ (e: any) => this.updateUsernameField(e.target.value) }
             />
            <TextField
              value= { passwordFieldValue }
              label="Password"
              fullWidth
              onChange={ (e: any) => this.updatePasswordField(e.target.value) }

             />
            <p css={ caption }>This site is protected by reCAPTCHA and the <a href="https://policies.google.com/privacy">Google Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.</p>
            <div css={ loginFormFlex }>
              <div>
                <FormControlLabel 
                control = { 
                  <Checkbox
                    value="Remember me"
                    checked={ requestToRememberLogin }
                    onChange={ (e: any) => this.toggleRememberMeState(e.target.checked) }
                  />
                }
                label="Remember me"
               />
              </div>
              <div css={ spacer }/>
              <p><a href="#">Forgot password?</a></p>
            </div>
              <Button
                size="large"
                variant="contained"
                color="primary"
               >Log In</Button>
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
