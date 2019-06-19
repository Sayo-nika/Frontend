import * as React from 'react'
import Link from 'next/link'
import NavbarlessLayout from '../components/NavbarlessLayout'
import { NextFC } from 'next'
import loginBackground from '../assets/img/login-bg.jpg';
import logo from '../assets/img/logo.svg';

/** @jsx jsx*/
import {css, jsx, Global} from '@emotion/core';

const loginContainerCss = css`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-image: url("${loginBackground}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
`

const loginCardCss = css`
  background-color: white;
  border-radius: 8px;
  width: 450px;
  margin: auto;
  height: 100%;
  padding: 16px;
  box-shadow: 0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);

`

const loginHeaderImgContainerCss = css`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`

const loginHeaderImg = css`
  height: 125px;
  width: auto;
`

const loginFormCss = css`
  padding: 40px;
  text-align: center;
  color: rgba(0,0,0,.54);

  a {
    color: #e84444;
  }
`

const caption = css`
  font-size: 12px;
`

const LoginPage: NextFC = () => {
  return (
    <NavbarlessLayout title="Login | Sayonika">
      <div id="login-container" css={loginContainerCss}>
        <div id="login-card" css={loginCardCss}>
          <div id="login-header" css={loginHeaderImgContainerCss}>
            <img src={logo} css={loginHeaderImg} alt="Sayonika"/>
          </div>
          <div id="login-form" css={loginFormCss}>
            {/* TODO: Add login components here */}
            <p css={caption}>This site is protected by reCAPTCHA and the <a href="https://policies.google.com/privacy">Google Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.</p>
          </div>
        </div>
      </div>
    </NavbarlessLayout>
  )
}

export default LoginPage;
