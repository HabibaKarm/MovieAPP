import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
  const [Movies, setMovies] = useState([]);

  useEffect(() => {
    const options = {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMDg2NWY3YmJlY2E3OGM2MzRiN2JhNWVmZWY0YTZkYSIsIm5iZiI6MTcyNDc1Njk4Ny4xNTAyNTYsInN1YiI6IjY1MzZiMDhhNGJjMzhiMDBmZmI2ZjRlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3ENrCX4lRfcakfl79rq5FrtQxn9dXAxyMn4HbTgRioY'
      }
    };

    fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
      .then(response => response.json())
      .then(data => setMovies(data.results.slice(0, 3)))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);


  return (
    <div className='w-100 '>


 <div className="homepage row">

        <div className="contant col-6">
          <h1 className='header'>Welcome to My Movie App!</h1>

          <p className='pcontant'>This is a simple movie app built using React.<br></br>
            You can search for movies by title, year, or genre. <br />
            Click on a movie to view its details and reviews.</p>
          <div className="btt">
            <Link className="btn-slice text-uppercase" to={"/nowPlaying"}>
              <div className="top"><span>View Movies Now</span></div>
              <div className="bottom"><span>View Movies Now</span></div>
            </Link>

          </div>

        </div>
        <div className="col-6">
          <Link to={"https://youtu.be/uY5oF0tZiWI?si=o35q05Llz5Jax9SX"} target='_blank'>
            <div className=" contant iframe">
              <i className="fa-solid fa-play" id='icon'></i>
            </div>
          </Link>
        </div>








      
</div>
     
      <div className="listmovies container">

        <div className="row">
          {
            Movies.map((m) => {
              return (
                <div className="col-md-4 col-sm-12">
                  <div className="movie" key={m.id}>
                    <img className='img' src={'https://image.tmdb.org/t/p/original/' + m.poster_path} alt={m.original_title} />

                    <h3 className="title">{m.original_title}</h3>
                    <p className='about'>{m.overview.slice(0, 100)}...</p>
                    <i className="fa-solid fa-star"></i>

                    <p className='rate'>{m.vote_average.toFixed(1)}</p>
                    <Link to={"/Single/"+m.id} className="btn text-start details">View Details <i className="fa-solid fa-arrow-right"></i></Link>

                  </div>
                </div>)
            }
            )
          }
          <div className=" w-auto m-auto">
            <Link to="/nowPlaying" className=' btn btns'>see all movies <i className="fa-solid fa-arrow-right"></i> </Link>

          </div>



        </div>


      </div>





    </div>




  )
}
