import React, { Component } from 'react';
import navbarLogo from '../assets/img/logo.svg';
import { mdiLogin } from '@mdi/js';
import Link from 'next/link';

/** @jsx jsx*/
import { css, jsx } from '@emotion/core';

interface INavbarProps {
    classes?: any;
}

function Icon(props: any) {
  return (
    <svg viewBox="0 0 24 24"
      style={{ width: '1.5rem' }}>
      <path d={ props.path }/>
    </svg>
  )
}


// const navbarCss = css({
//     backgroundColor: "#E0E0E0",
//     height: 64,
//     margin: 0,
//     position: "relative",
//     top: 0,
//     verticalAlign: "middle",
//     paddingLeft: 24,
//     paddingRight: 24,
//     display: "flex"
// })

// const navbarLogoCss = css({
//     width: "auto",
//     top: 8,
//     height: 56,
//     flexGrow: 1,
//     position: "relative",
//     '& img': {
//         top: 8,
//         height: 56,
//     }
// })

// const navbarLoginButton = css({
//     display: "flex",
//     verticalAlign: 'middle',
//     color: '#e84444',
//     fill: '#e84444',
//     position: 'relative',
//     height: 56,
//     '& svg': {
//         width: '36px !important',
//         height: '36 !important',
//     },
//     '& p': {
//         marginLeft: 8,
//         fontSize: '1.35rem',
//         textTransform: 'uppercase',
//         fontWeight: 300,
//         marginTop: 12,
//         height: 56,
//         verticalAlign: 'middle'
//     }
    
// })

const navbarCss = css`
    background-color: #E0E0E0;
    height: 64px;
    margin: 0;
    position: relative;
    top: 0;
    vertical-align: middle;
    padding-left: 24px;
    padding-right: 24px;
    display: flex;
`

const navbarLogoCss = css`
    width: auto;
    top: 8px;
    height: 56px;
    flex-grow: 1;
    position: relative;
    img {
        top: 8px;
        height: 56px;
    }
`

const navbarLoginButton = css`
    display: flex;
    vertical-align: middle;
    color: #e84444;
    fill: #e84444;
    position: relative;
    height: 56px;
    svg {
        top: 10px;
        position: relative;
        width: 36px !important;
        height: 36px !important;
    }
    p {
        margin-left: 8px;
        font-size: 1.35rem;
        text-transform: uppercase;
        font-weight: 300;
        margin-top: 12px;
        height: 56px;
        vertical-align: middle;
    }
`

class Navbar extends Component<INavbarProps, any> {
    render() {
        return (
            <div id="sy-navbar" css={ navbarCss }>
                <div css={ navbarLogoCss }>
                    <img src={ navbarLogo } alt="Sayonika"/>
                </div>

                {/* TODO: Hook this up to a link */}
                <Link href="/login">
                    <a>
                        <div css={ navbarLoginButton }>
                            <Icon path={ mdiLogin }/>
                            <p>Log in</p>
                        </div>
                    </a>
                </Link>
            </div>
        )
    }
}

export default Navbar;