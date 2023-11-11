import React from 'react'

const Page = async ({ searchParams }) => {

  //! 👇 If there is a genre parameter from searchParams, I want it to bring the films belonging to it, if not, I want it to bring the films in the "trending/all/day" category.

  const res = await fetch(`https://api.themoviedb.org/3/${searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"}?api_key=b137f56f6405b0af4522d9412326d93d&language=en-US&page=1`, { next: { revalidate: 10000 } })


  const data = await res.json();

  return (
    <div>

    </div>
  )
}

export default Page