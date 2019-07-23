import React from 'react';



const Movie = ({ name, price, genre }) => {

    return (
        <div>
           <h3>{name}</h3>
           <p>{price}</p>
           <p>{genre}</p>
        </div>
    );
};


export default Movie;