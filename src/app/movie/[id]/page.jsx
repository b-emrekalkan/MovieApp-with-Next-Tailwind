import Image from 'next/image';
import React from 'react'

const getMovie = async (id) => {
    const apiKey = process.env.TMDB_API_KEY;
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`);
    console.log(res);
    return await res.json();
}

const Page = async ({ params }) => {
    const id = params.id;
    const movieDetail = await getMovie(id)
    return (
        <div className='relative p-7 min-h-screen'>
            <Image fill src={`https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path || movieDetail?.poster_path}`} />
            <div className='absolute'>
                <div className='text-4xl font-bold my-3'>{movieDetail?.title || movieDetail?.original_name || movieDetail?.original_title}</div>
                <div className='text-2xl font-bold my-3'>
                    {(movieDetail?.first_air_date && new Date(movieDetail.first_air_date).getFullYear()) ||
                        (movieDetail?.release_date && new Date(movieDetail.release_date).getFullYear())} - {(movieDetail?.vote_average && movieDetail.vote_average.toFixed(2))}
                </div>
                <div className='w-1/2'>{movieDetail?.overview}</div>
                <div className='border w-32 p-2 rounded-md text-center font-bold text-lg cursor-pointer my-3 hover:bg-white hover:transition-colors hover:transition-bg hover:text-black'>Trail</div>
            </div>
        </div>
    )
}

export default Page