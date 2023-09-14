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