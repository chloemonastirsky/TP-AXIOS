
import axios from "axios";
import api from '/src/api.js'
import { useState, useEffect } from 'react';

const MovieCard = ({ imdbID,Title, Poster }) => {

    return (

        <div>

            {
               
                    <div key={movie.imdbID}>

                        <h2>{movie.Title}</h2>

                        <img src={movie.Poster} />

                    </div>

                
            }

        </div>
    );
};

export default MovieCard;