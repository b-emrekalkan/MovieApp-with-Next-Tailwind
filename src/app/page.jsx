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