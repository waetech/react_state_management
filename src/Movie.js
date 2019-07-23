import React from 'react';



const Movie = ({ name, price, genre, year }) => {

    return (
        <div>
           <h3>{name}</h3>
           <p>{price}</p>
           <p>{genre}</p>
           <p>{year}</p>
        </div>
    );
};


export default Movie;