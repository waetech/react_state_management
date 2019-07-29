import React, {useState, createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {
    const [movies, setMovies] = useState ([
        {
            name: 'X Men',
            price: '$10',
            genre: 'action',
            year: '2005',
            review: 'This was excellent',
            id: 23134
        },
        {
            name: 'Game of Thrones',
            price: '$10',
            genre: 'action',
            year: '2014',
            review: 'This was excellent',
            id: 2675
        },
        {
            name: 'Inception',
            price: '$10',
            genre: 'drama',
            year: '2013',
            review: 'This was excellent',
            id: 9057
        },
        {
            name: 'Terminator',
            price: '$12',
            genre: 'action',
            year: '1984',
            review: 'This was excellent',
            id: 5678
        }
    ]);
    return(
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
            </MovieContext.Provider>
    );
        
};