"use client"
import React from 'react'
import { ThemeProvider } from 'next-themes'

//? The Provider component accepts a prop named "children" and wraps this prop with the "ThemeProvider" component. The "ThemeProvider" component comes from the "next-themes" library used with Next.js and helps you implement themes into your application.

const Providers = ({ children }) => {
    return (
        //! If your Next.js app uses a class to style the page based on the theme, change the attribute prop to class: attribute="class"
        //? enableSystem = true: Whether to switch between dark and light based on prefers-color-scheme
        <ThemeProvider enableSystem={true} attribute="class">
            {children}
        </ThemeProvider>
    )
}

export default Providers