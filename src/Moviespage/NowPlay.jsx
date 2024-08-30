import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


export default function NowPlay() {

    const [Movi, setMovies] = useState([]);

  useEffect(() => {
    const options = {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMDg2NWY3YmJlY2E3OGM2MzRiN2JhNWVmZWY0YTZkYSIsIm5iZiI6MTcyNDc1Njk4Ny4xNTAyNTYsInN1YiI6IjY1MzZiMDhhNGJjMzhiMDBmZmI2ZjRlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3ENrCX4lRfcakfl79rq5FrtQxn9dXAxyMn4HbTgRioY'
      }
    };

    fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);


  return (
    <div>
         <div className=" movieslist  container">

<div className="row">
  {
    Movi.map((m) => {
      return (
        <div className="col-md-4 col-sm-12 my-5">
          <div className="movie" key={m.id}>
            <img className='img' src={'https://image.tmdb.org/t/p/original/' + m.poster_path} alt={m.original_title} />

            <h3 className="title">{m.original_title.slice(0, 30)}</h3>
            <p className='about'>{m.overview.slice(0, 100)}...</p>
            <i className="fa-solid fa-star"></i>

            <p className='rate'>{m.vote_average.toFixed(1)}</p>
            <Link to={"/Single/"+m.id} className="btn text-start details">View Details <i className="fa-solid fa-arrow-right"></i></Link>

          </div>
        </div>)
    }
    )
  }

</div>


</div>
    </div>
  )
}
