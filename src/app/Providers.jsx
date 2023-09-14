"use client"
import React from 'react'
import { ThemeProvider } from 'next-themes'

//? The Provider component accepts a prop named "children" and wraps this prop with the "ThemeProvider" component. The "ThemeProvider" component comes from the "next-themes" library used with Next.js and helps you implement themes into your application.

const Providers = ({ children }) => {
    return (
        <ThemeProvider>{children}</ThemeProvider>
    )
}

export default Providers