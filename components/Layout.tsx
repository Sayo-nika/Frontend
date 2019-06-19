import * as React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import HeadProperties from './HeadProperties';
import Navbar from './Navbar';
import { ThemeProvider } from 'emotion-theming';

/** @jsx jsx*/
import {css, jsx, Global} from '@emotion/core';


type Props = {
  title?: string
}

// Handle any special theming with Sayonika colors
// TODO: Hook this to any possible element.
const theme = {
  colors: {
    primary: "#e84444"
  }
}

// const layoutCss = css({
//     'html, body': {
//         padding: 0,
//         margin: 0,
//         fontFamily: "'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
//         height: "100%"
//     }
// })

const layoutCss = css`
    html, body {
        padding: 0;
        margin: 0;
        font-family: 'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        height: 100%;
    }
`

// const mainLayout = css({
//   paddingLeft: 32,
//   paddingRight: 32,
// })

const mainLayout = css`
  padding-left: 32px;
  padding-right: 32px;
`

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
}) => (
  <ThemeProvider theme={theme}>
    <div>
      <Global styles={layoutCss}/>
      <HeadProperties title={title}/>
      <header>
          <Navbar/>
      </header>
      <div css={mainLayout}>
        {children}
      </div>
      <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </footer>
    </div>
  </ThemeProvider>
)

export default Layout
