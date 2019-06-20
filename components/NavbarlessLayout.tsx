import * as React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import HeadProperties from './HeadProperties';
import { ThemeProvider } from 'emotion-theming';

/** @jsx jsx*/
import { css, jsx, Global } from '@emotion/core';

interface INavbarlessLayoutProps {
	title?: string;
	children: any;
}

// Handle any special theming with Sayonika colors
// TODO: Hook this to any possible element.
const theme = {
  colors: {
    primary: "#e84444"
  }
}

const layoutCss = css`
    html, body {
        padding: 0;
        margin: 0;
        font-family: 'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        height: 100%;
    }
`

const NavbarlessLayout: React.FunctionComponent<INavbarlessLayoutProps> = ({
	children,
	title = "Sayonika"
}) => (
	<ThemeProvider theme={ theme }>
    <div>
      <Global styles={ layoutCss }/>
      <HeadProperties title={ title }/>
      <div>
        { children }
      </div>
    </div>
  </ThemeProvider>
);

export default NavbarlessLayout;