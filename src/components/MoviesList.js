import React from 'react';
import { Link } from "react-router-dom";

const MoviesList = ({ movies }) => {
  const moviesArray = movies.map((movie)=>(
    <li key={movie.id}>
      <Link to={`/movies/${movie.id}`}>
        {movie.title}
      </Link>
    </li>
  ));

  return (
    <ul>{moviesArray}</ul>
  )
}

export default MoviesList;