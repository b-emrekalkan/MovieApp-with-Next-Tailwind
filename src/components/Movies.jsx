"use client"
import Image from 'next/image';
import React from 'react'

const Movies = ({ dt }) => {
    console.log(dt);
    return (
        <div className='w-[450px] relative'>
            {/* 👇 We get Runtime Error in this section. To solve this, we need to edit the next.config.js file. */}
            <Image width={450} height={300} src={`https://image.tmdb.org/t/p/original/${dt?.backdrop_path || dt?.poster_path}`} />
            <div className='absolute bottom-0 '>
                {dt?.title}
            </div>
        </div>
    )
}

export default Movies