import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Navbar from './Navbar'

/** @jsx jsx*/
import {css, jsx, Global} from '@emotion/core';


type Props = {
  title?: string
}

const layoutCss = css({
    'html, body': {
        padding: 0,
        margin: 0,
        fontFamily: "'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;",
        height: "100%"
    }
})

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
}) => (
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
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
)

export default Layout
