import axios from "axios";
import api from '../../../api.js'
import { useState, useEffect } from 'react';


const MovieDetail = ({ imdbID}) => {
    
    const [movieDetail, setMovieDetail] = useState("");
        useEffect(() =>{ 
    
            api.get(`/?i=${imdbID}`)
                .then((response) => {
                setMovieDetail(response.data);
                })
                .catch((error) => {
                    console.error("No se encontro la pelicula");
                });
      }, [imdbID])
    
    return (

        <div>
            {
                <li>
                    <h1>{movieDetail.Title}</h1>

                    <img src={movieDetail.Poster} />

                    <p>{movieDetail.Plot}</p>

                    <p>Director: {movieDetail.Director}</p>

                    <p>Actors: {movieDetail.Actors}</p>

                    <p>Genre: {movieDetail.Genre}</p>

                    <p>IMDb: {movieDetail.imdbRating}</p>
                </li>
            }

        </div>
    );
};

export default MovieDetail;