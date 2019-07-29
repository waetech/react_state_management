import React from 'react';



const Movie = ({ name, price, genre, year, review }) => {

    return (
        <div>
           <h3>{name}</h3>
           <p>{price}</p>
           <p>{genre}</p>
           <p>{year}</p>
           <p>{review}</p>
        </div>
    );
};


export default Movie;