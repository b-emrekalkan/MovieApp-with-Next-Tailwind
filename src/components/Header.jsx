import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'


const Header = () => {
    return (
        <div className='flex items-center gap-3 h-20 p-5'>
            <div className='bg-orange-600 rounded-lg p-3 text-2xl font-bold text-white'>MovieApp</div>
            <div className='flex items-center gap-2 border '>
                <input type="text" />
                <BiSearchAlt size={25} />
            </div>
        </div>
    )
}

export default Header