import React from 'react'
import "./globals.css"
import Header from '@/components/Header'
import Providers from './Providers'

const Layout = ({ children }) => {
  return (
    <html lang='en'>
      <title>MovieApp</title>

      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}

export default Layout