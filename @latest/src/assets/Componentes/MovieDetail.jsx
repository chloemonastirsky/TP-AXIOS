import axios from "axios";
import api from '/src/api.js'
import { useState, useEffect } from 'react';


const MovieDetail = ({ imdbID}) => {
    
    const [movieDetail, setMovieDetail] = useState("");
    const detallePelicula = (e) => {
            e.preventDefault();
    
            api.get(`/?i=${imdbID}`)
                .then((response) => {
                setMovieDetail(response.data.search);
                })
                .catch((error) => {
                    console.error("No se encontro la pelicula");
                });
        };
    
    return (

        <div>
            {
                <li>
                    <h1>{movie.Title}</h1>

                    <img src={movie.Poster} />

                    <p>{movie.Plot}</p>

                    <p>Director: {movie.Director}</p>

                    <p>Actors: {movie.Actors}</p>

                    <p>Genre: {movie.Genre}</p>

                    <p>IMDb: {movie.imdbRating}</p>
                </li>
            }

        </div>
    );
};

export default MovieDetail;