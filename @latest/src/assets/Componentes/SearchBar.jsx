import { useEffect } from 'react';
import axios from "axios";
import api from '/src/api.js'
import { useState, useEffect } from 'react';

const movie = () =>{
    const[movie, setMovie]= useState()
    const[loading, setLoading]=useState(true);

    const buscarPelicula = (e) => {
        e.preventDefault();

        api.get(`/t?query=${search}`)
            .then((response) => {
                setMovie(response.data);
            })
            .catch((error) => {
                console.error("No se encontro la pelicula");
            });
    };

    return(
        <div>
            <form onSubmit={buscarPelicula}>
               <button type="submit">
                    Buscar
                </button>
            </form>
            <h2>Pelicula {movie.name} </h2>
            <img src>{movie.img}</img>
        </div>
    
)
};

