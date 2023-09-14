import React from 'react'
import "./globals.css"

const Layout = ({ children }) => {
  return (
    <html lang='en'>
      <title>MovieApp</title>

      <body>
        {children}
      </body>
    </html>
  )
}

export default Layout