"use client"
import Image from 'next/image';
import React from 'react'

const Movies = ({ dt }) => {
    console.log(dt);
    return (
        <div className='w-[450px] relative cursor-pointer'>
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