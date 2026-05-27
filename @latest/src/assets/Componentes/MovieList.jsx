import axios from "axios";
import api from '../../../api.js'
import { useState, useEffect } from 'react';
import SearchBar from "./SearchBar";
import MovieCard from "./MovieCard"


const MovieList = ({ movies, onSelect }) => {

    return (

        <div>

            {
                movies.map(m => (

                    <MovieCard
                        key={m.imdbID}
                        imdbID={m.imdbID}
                        Title={m.Title}
                        Poster={m.Poster}
                        onSelect={onSelect}
                    />

                ))
            }

        </div>
    );
};

export default MovieList;