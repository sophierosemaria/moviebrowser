import Hero from "./Hero";
import { useParams} from 'react-router-dom';
import { useState } from "react";
import { useEffect } from "react";

const MovieView = () => {
  const { id } = useParams()
  const [movieDetails, setMovieDetails] = useState({})
  const [isLoading, setIsLoading ] = useState(true)  

  useEffect(() => {
    console.log('make an api request', id)
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=11212f71e357d9fe6b5473b65bd724b6&language=en-US`)
      .then(response => response.json())  
      .then(data => {
        setMovieDetails(data)
        setIsLoading(false)
      })
  }, [id])

  function renderMovieDetails() {
    if (isLoading) {
      return <Hero text="Loading..." />
    }
    if (movieDetails) {
    //   TODO: Deal with possible missing image
      const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
      if (posterPath === "https://image.tmdb.org/t/p/w500null") {
        
      }
      return (
        <>
          <Hero text={movieDetails.original_title} />
          <div className="container my-5">
            <div className="row">
              <div className="col-md-3">
                <img src={posterPath} className="img-fluid shadow rounded" alt={movieDetails.original_title} />
              </div>
              <div className="col-md-9">
                <h2>{movieDetails.original_title}</h2>
                <p> {movieDetails.overview} </p>
              </div>
            </div>
          </div>
        </>
      )
    }
  }

  return renderMovieDetails()
};

export default MovieView;
