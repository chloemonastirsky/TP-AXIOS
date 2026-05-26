import axios from "axios";
import api from '../../../api.js'
import { useState, useEffect } from 'react';
import SearchBar from "./SearchBar";
import MovieCard from "./MovieCard"


const MovieList = ({movies}) => {


    return (

        <div>

            {
                movies.map(m => <MovieCard key={m.imdbID} imdbID={m.imdbID} Title={m.Title} Poster={m.Poster} />)
            }

        </div>
    );
};

export default MovieList;