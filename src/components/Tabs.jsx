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