import React, {useState, createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {
    const [movies, setMovies] = useState ([
        {
            name: 'X Men',
            price: '$10',
            id: 23134
        },
        {
            name: 'Game of Thrones',
            price: '$10',
            id: 2675
        },
        {
            name: 'Inception',
            price: '$10',
            id: 9057
        }
    ]);
    return(
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
            </MovieContext.Provider>
    );
        
};