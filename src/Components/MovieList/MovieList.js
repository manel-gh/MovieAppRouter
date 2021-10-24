import React from "react";
import MovieCard from "../MovieCard/MovieCard"
import "./MovieList.css"
const MovieList = ({ movies, searchTitle, searchRating, match, ...props}) => {
  
    const handleMovie = (name) => {
      alert("this movie has a name", name);
    };
    return (
      <div>
        <div className="moviesList">
          {
          movies
            .filter(
              (el) =>
                el.name.toLowerCase().includes(searchTitle.toLowerCase()) &&
                el.rating >= searchRating
            )
            .map((movie) => (
              <MovieCard movie={movie} key={movie.id} handleMovie={handleMovie} {...props}  match={match}/>
            ))
        
        }
        </div>
      </div>
    );
  };
  
  export default MovieList;