import api from '../../../api.js'
import { useState } from 'react';

const SearchBar = ({ setMovies, setLoading, setError }) => {

    const [search, setSearch] = useState("");

    const buscarPelicula = (e) => {
        e.preventDefault();

        setLoading(true);
        setError(null);

        api.get(`/?s=${search}`)
            .then((response) => {
                setMovies(response.data.Search);
                setLoading(false);
            })
            .catch((error) => {
                console.error("No se encontro la pelicula");
                setError("No se pudo conectar con la API.");
                setLoading(false);
            });
    };

    return(
        <div className="searchbar">
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