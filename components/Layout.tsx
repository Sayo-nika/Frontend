import * as React from 'react';
import Link from 'next/link';
import Head from 'next/head';
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

const layoutCss = css({
    'html, body': {
        padding: 0,
        margin: 0,
        fontFamily: "'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;",
        height: "100%"
    }
})

const mainLayout = css({
  paddingLeft: 32,
  paddingRight: 32,
})

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
}) => (
  <ThemeProvider theme={theme}>
    <div>
      <Global styles={layoutCss}/>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:100,300,400,500,700,900&display=swap"/>
      </Head>
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
