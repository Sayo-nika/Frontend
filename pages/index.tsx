import * as React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import { NextFC } from 'next'
import Navbar from '../components/Navbar'

const IndexPage: NextFC = () => {
  return (
    <Layout title="Home | Sayonika">
    <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  )
}

export default IndexPage
