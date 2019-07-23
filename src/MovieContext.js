import React, {useState, createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {
    const [movies, setMovies] = useState ([
        {
            name: 'X Men',
            price: '$10',
            genre: 'action',
            id: 23134
        },
        {
            name: 'Game of Thrones',
            price: '$10',
            genre: 'action',
            id: 2675
        },
        {
            name: 'Inception',
            price: '$10',
            genre: 'drama',
            id: 9057
        },
        {
            name: 'Terminator',
            price: '$12',
            genre: 'action',
            id: 5678
        }
    ]);
    return(
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
            </MovieContext.Provider>
    );
        
};