import Head from 'next/head'
import React from 'react'
import { Header } from './'

const Layout = ({ children }) => {
  return (
    <div className='wrapper mx-auto px-4 md:px-0 mb-8'>
        <Header />
        {children}
    </div>
  )
}

export default Layout