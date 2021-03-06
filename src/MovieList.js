import React, { useState, useContext } from 'react';
import Movie from './Movie';
import {MovieContext} from './MovieContext';

const MovieList = () => {
    const [movies, setMovies] = useContext(MovieContext);
    return (
       <div>     
          {movies.map(movie => (
              <Movie name={movie.name} price={movie.price} genre={movie.genre} year={movie.year} review={movie.review} key={movie.id} />
          ))} 
       </div>
        
    );
};

export default MovieList;