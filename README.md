This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

## 🌐 [Create a Next.js project](https://tailwindcss.com/docs/guides/nextjs) with this command and direct this folder

```bash
npx create-next-app@latest movieapp
cd movieapp/
```

## 🖥️ Install Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## ♦️ Since the first rendered page is "page.js", edit this page and try to use Tailwind’s utility classes to style your content.

```javascript
import React from 'react'

const Page = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  )
}

export default Page
```

## ♦️ Edit "layout.js", where we do the wrapping and host the static files

```javascript
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
```

## 🖥️ To use React-Icons, install

```bash
npm install react-icons
```

## 📂 Create "components" folder under "src" and start with "Header.jsx"

```javascript
import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import MenuItems from './MenuItems'
import ThemeComp from './ThemeComp'


const Header = () => {
    const menu = [
        {
            name: 'About',
            url: '/abuot'
        },
        {
            name: 'Sign In',
            url: '/login'
        }
    ]
    return (
        <div className='flex items-center gap-5 h-20 p-5'>
            <div className='bg-rose-500 rounded-lg p-3 text-2xl font-bold text-white'>MovieApp</div>
            <div className='flex items-center gap-2 border p-3 flex-1 rounded-lg'>
                {/* used "outline-none" for hide the border of input field */}
                {/* used "flex-1" for responsive width */}
                <input placeholder='Search a movie...' className='outline-none flex-1 bg-transparent' type="text" />
                <BiSearchAlt size={25} />
            </div>
            <ThemeComp />
            {/* We pass "mn" as props to MenuItems. 👇 */}
            {
                menu.map((mn, i) => (
                    <MenuItems mn={mn} key={i} />
                ))
            }
        </div>
    )
}

export default Header
```

## ♦️ Since I want to see the "header" on every page, I need to import it just below the body tag in "layout.jsx".

```javascript
import Header from '@/components/Header'

const Layout = ({ children }) => {
  return (
    <html lang='en'>
      <title>MovieApp</title>
      <body>
      // 👇👇👇👇👇
        <Header />
        {children}
      </body>
    </html>
  )
}

export default Layout
```

## 📂 Create "MenuItems.jsx" file under "components" folder for menus in the Header.

```javascript
import Link from 'next/link'
import React from 'react'

//! Capture the "mn" props from the "Header" here 👇
const MenuItems = ({ mn }) => {
    return (
        <Link href={mn.url}>{mn.name}</Link>
    )
}

export default MenuItems
```

## ☀️🌃 For light and dark mode; install [next-themes](https://www.npmjs.com/package/next-themes). Then choose the icons from react-icons.

```bash
npm i next-themes
```

## 📂 Create "ThemeComp.jsx" under components folder and import it in "Header.jsx" between -input- and -menu- field.

```javascript
import React from 'react'
import { MdDarkMode } from "react-icons/md"

const ThemeComp = () => {
    return (
        <div>
            <MdDarkMode size={25} className='cursor-pointer' />
        </div>
    )
}

export default ThemeComp
```

## 📂 To add dark mode for all site, create "Providers.jsx" file under "app" folder.

```javascript
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
```






Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.




## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
