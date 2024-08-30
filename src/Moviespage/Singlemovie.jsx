import React, { useState, useEffect } from 'react'
import { useParams,Link } from 'react-router-dom'


export default function Singlemovie() {

    var myparameters = useParams();
    var id = myparameters.id
    const [movieData, setMovieData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c0865f7bbeca78c634b7ba5efef4a6da`); // Replace 'YOUR_API_KEY' with your actual API key
                const data = await response.json();
                setMovieData(data);
            } catch (error) {
                console.error('Error fetching movie data:', error);
                // Handle errors gracefully (e.g., display an error message)
            }
        };

        fetchData();
    }, [id]);


    const [Moviesother, setMovies] = useState([]);

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
        <div>


            <>

                <div className="poster" style={{ backgroundImage: `url(${"https://image.tmdb.org/t/p/original/" + movieData.poster_path})` }}>
                    <div className="container">
                        <div className="row">
                            <div className=" contant col-md-6 col-sm-12">
                                <h3 className="header">{movieData.original_title}</h3>
                                <p className='pcontant'>{movieData.overview}</p>
                                <div className="btt">
                                    <Link className="btn-slice text-uppercase" to={movieData.homepage} target="_blank" >
                                        <div className="top"><span>View Movie</span></div>
                                        <div className="bottom"><span>View Movie</span></div>
                                    </Link>
                                 

                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </>
            <div className="cast my-3 text-center">
                <h1>OTHER MOVIES YOU CAN WATCH</h1>
                <div className="listmovies container my-5">

        <div className="row">
          {
            Moviesother.map((movi) => {
              return (
                <div className="col-md-4 col-sm-12 ">
                  <div className="movie m-auto my-4" key={movi.id}>
                    <img className='img' src={'https://image.tmdb.org/t/p/original/' + movi.poster_path} alt={movi.original_title} />

                    <h3 className="title">{movi.original_title}</h3>
                    <p className='about'>{movi.overview.slice(0, 100)}...</p>
                    <i className="fa-solid fa-star"></i>

                    <p className='rate'>{movi.vote_average.toFixed(1)}</p>
                    <Link to={"/Single/"+movi.id} className="btn text-start details">View Details <i className="fa-solid fa-arrow-right"></i></Link>

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


        </div>


    )
}
