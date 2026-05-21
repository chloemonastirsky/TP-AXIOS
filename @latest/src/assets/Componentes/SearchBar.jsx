 import axios from "axios";
import api from '/src/api.js'
import { useState, useEffect } from 'react';

const SearchBar = ({ setMovies }) => {

    const [search, setSearch] = useState("");
    const[loading, setLoading]=useState(true);

    const buscarPelicula = (e) => {
        e.preventDefault();

        api.get(`/?s=${search}`)
            .then((response) => {
                setMovies(response.data.search);
            })
            .catch((error) => {
                console.error("No se encontro la pelicula");
            });
    };

    return(
        <div>
            <form onSubmit={buscarPelicula}>

                <input
                    type="text"
                    placeholder="Buscar pelicula"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button type="submit">
                    Buscar
                </button>

            </form>        
        </div>
    
)
};

export default SearchBar;

