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

## 📂 

```javascript

```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
