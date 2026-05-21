import axios from "axios";
import api from '/src/api.js'
import { useState, useEffect } from 'react';
import SearchBar from "./SearchBar";
import MovieCard from "./MovieCard"


const MovieList = ({movies}) => {


    return (

        <div>

            {
                movies.map(m => <MovieCard movie={m} ></MovieCard>)
            }

        </div>
    );
};

export default MovieList;