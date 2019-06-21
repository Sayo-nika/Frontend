import * as React from 'react';
import Link from 'next/link';
import NavbarlessLayout from '../components/NavbarlessLayout';
import TextField, { Input } from '@material/react-text-field';

import '@material/react-text-field/dist/text-field.css';

/** @jsx jsx*/
import { css, jsx } from '@emotion/core';

import loginBackground from '../assets/img/login-bg.jpg';
import logo from '../assets/img/logo.svg';

interface LoginProps {

}

interface LoginState {
  usernameFieldValue: String
  passwordFieldValue: String
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

const caption = css `
  font-size: 12px;
`

class LoginPage extends React.Component<LoginProps, LoginState>{

  constructor(props: LoginProps) {
    super(props);

    this.state = {
      usernameFieldValue: "",
      passwordFieldValue: ""
    }
  }

  updateUsernameField(usernameFieldValue: String) {
    this.setState({ usernameFieldValue });
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
            <TextField
                label="Username"
              >
                <Input
                  value={ this.state.usernameFieldValue }
                  onChange={ (e: any) => this.updateUsernameField(e.target.value) }
                />
            </TextField>
            <p css={ caption }>This site is protected by reCAPTCHA and the <a href="https://policies.google.com/privacy">Google Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.</p>
          </div>
        </div>
      </div>
    </NavbarlessLayout>
    )
  }

}

export default LoginPage;
