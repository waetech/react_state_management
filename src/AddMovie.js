import React, {useState, useContext} from 'react';
import {MovieContext} from './MovieContext';

const AddMovie = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [genre, setGenre] = useState('');
    const [year, setYear] = useState('');
    const [review, setReview] = useState('');
    const [movies, setMovies] = useContext(MovieContext);

    const updateName = e => {
        setName(e.target.value);
    }

    const updatePrice = e => {
        setPrice(e.target.value);
    }

    const updateGenre = e => {
        setGenre(e.target.value);
    }

    const updateYear = e => {
        setYear(e.target.value);
    }

    const updateReview = e => {
        setReview(e.target.value);
    }

    const addMovie = e => {
        e.preventDefault();
        setMovies(prevMovies => [...prevMovies, {name: name, price: price, genre: genre, year: year, review: review }]);
        
    };

    

    return(
        <form onSubmit={addMovie}>
            <input type="text" name="name" value={name} onChange={updateName}></input>
            <input 
            type="text" 
            name="price" 
            value={price} 
            onChange={updatePrice}>
                
            </input>
            <input type="text" name="genre" value={genre} onChange={updateGenre}></input>
            <input type="text" name="genre" value={year} onChange={updateYear}></input>
            <input type="text" name="genre" value={review} onChange={updateReview}></input>
            <button>Submit</button>
        </form>
    );
}

export default AddMovie;
