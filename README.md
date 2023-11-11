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
"use client"
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { MdDarkMode, MdLightMode } from "react-icons/md"


const ThemeComp = () => {
    const [mounted, setMounted] = useState(false)
    const { systemTheme, theme, setTheme } = useTheme()

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
    }, [])

    const themeMode = theme === "system" ? systemTheme : theme
    return (
        <div>
            {
                mounted && (
                    themeMode === "dark" ?
                        <MdLightMode onClick={() => setTheme('light')} className="cursor-pointer" size={25} /> :
                        <MdDarkMode onClick={() => setTheme('dark')} className="cursor-pointer" size={25} />
                )
            }
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

## ♦️ In tailwind.config.js, set the dark mode property to class:

```javascript
  plugins: [],
  darkMode: 'class'
```

## 🚩 Create `Tabs.jsx` component under `/app/components` folder and import it in `/app/layout.jsx` file.

```javascript
"use client"
import Link from 'next/link'
import React from 'react'
import { useSearchParams } from 'next/navigation'

const Tabs = () => {
    //? The useSearchParams hook allows you to easily read and modify URL parameters in the browser.
    //! The useSearchParams hook is used here to read URL parameters from the browser, allowing the user to interact with tabs that provide access to different types of content.
    const searchParams = useSearchParams()
    const genre = searchParams.get('genre')
    const tabs = [
        {
            name: "Popular",
            url: "popular"
        },
        {
            name: "Top Rated",
            url: "top_rated"
        },
        {
            name: "Upcoming",
            url: "upcoming"
        },
        {
            name: "Now Playing",
            url: "now_playing"
        }
    ]
    return (
        <div className='p-5 m-5 bg-gray-100 dark:bg-gray-900 flex items-center justify-center gap-7'>
            {
                tabs.map((tab, i) => (
                    <Link className={`cursor-pointer hover:opacity-80 transition-opacity ${tab.url === genre ? "underline underline-offset-8 text-red-600 " : ""}`} href={`/?genre=${tab.url}`}>{tab.name}</Link>
                ))
            }
        </div>
    )
}

export default Tabs
```

## 🚩 Let's fetch the data on the homepage, in `app/page.jsx`.

```javascript
import Movies from '@/components/Movies';
import React from 'react'

const Page = async ({ searchParams }) => {
  const apiKey = process.env.TMDB_API_KEY;

  //! 👇 If there is a genre parameter from searchParams, I want it to bring the films belonging to it, if not, I want it to bring the films in the "trending/all/day" category.

  const res = await fetch(`https://api.themoviedb.org/3/${searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"}?api_key=${apiKey}&language=en-US&page=1`, { next: { revalidate: 10000 } })


  const data = await res.json();

  return (
    <div className='flex items-center justify-center flex-wrap gap-3'>
      {
        data?.results?.map((dt, i) => (
          <Movies key={i} dt={dt} />
        ))
      }
    </div>
  )
}

export default Page
```

## 🚩 `Movies.jsx` component

```javascript
"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'

const Movies = ({ dt }) => {
    const router = useRouter()
    console.log(dt);
    return (
        <div onClick={() => router.push(`/movie/${dt?.id}`)} className='w-[450px] relative cursor-pointer'>
            {/* 👇 We get Runtime Error in this section. To solve this, we need to edit the next.config.js file. */}
            <Image width={450} height={300} src={`https://image.tmdb.org/t/p/original/${dt?.backdrop_path || dt?.poster_path}`} />
            <div className='absolute bottom-0 p-2 m-1 w-full h-full flex flex-col justify-end opacity-0 hover:opacity-80 transition-opacity '>
                <div className='text-xl font-bold'>{dt?.title || dt?.original_name || dt?.original_title}</div>
                <div>
                    {(dt?.first_air_date && new Date(dt.first_air_date).getFullYear()) ||
                        (dt?.release_date && new Date(dt.release_date).getFullYear())} - {(dt?.vote_average && dt.vote_average.toFixed(2))}
                </div>

            </div>
        </div>
    )
}

export default Movies
```

## ❗ Edit `next.config.js` file when `RunTimeError` occur about images

```javascript
//** @type {import('next').NextConfig} */
const NextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        domains: ["image.tmdb.org"]
    }
}
module.exports = NextConfig;
```

## 🚩 Create `movie` folder under `app`, add `[id]` folder, add `page.jsx` in it.

```javascript

```

## 🚩 To Search Movies customize `Header.jsx`

```javascript
"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
//...
const Header = () => {
    const [keyword, setKeyword] = useState("");
    const router = useRouter();
    //...
    const searchFunc = (e) => {
        if (e.key === "Enter" && keyword.length > 3) {
            router.push(`search/${keyword}`)
        }
    }
    return (
           //....
                <input onKeyDown={searchFunc} onChange={e => setKeyword(e.target.value)} placeholder='Search a movie...' className='outline-none flex-1 bg-transparent' type="text" />
            //...
    )
}

export default Header
```

## 🚩 To route the page `search/...` page; create `seacrh` folder under app, add `[keyword]` folder and `page.jsx` file in it.

```javascript

```
