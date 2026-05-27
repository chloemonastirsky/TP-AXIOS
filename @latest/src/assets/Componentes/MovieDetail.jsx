import api from "../../../api.js";
import { useState, useEffect } from "react";
import './MovieDetail.css'

const MovieDetail = ({ imdbID, onClose }) => {

    const [movieDetail, setMovieDetail] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        setLoading(true);

        api.get(`/?i=${imdbID}`)
            .then((response) => {

                setMovieDetail(response.data);
                setLoading(false);

            })
            .catch((error) => {

                console.error("No se encontro la pelicula");
                setLoading(false);

            });

    }, [imdbID]);

    if (loading) {
        return <p>Cargando...</p>;
    }

    return (

      

        <div className="modal-overlay">
  <div className="modal">
    <button className="modal-close" onClick={onClose}>✕</button>
    <div className="modal-poster">
     <img src={movieDetail.Poster} alt={movieDetail.Title}/>
    </div>
    <div className="modal-content">
            <button onClick={onClose}>
                Cerrar
            </button>

            <h1>{movieDetail.Title}</h1>

            <p>{movieDetail.Plot}</p>

            <p>Director: {movieDetail.Director}</p>

            <p>Actors: {movieDetail.Actors}</p>

            <p>Genre: {movieDetail.Genre}</p>

            <p>IMDb: {movieDetail.imdbRating}</p>      
    </div>
  </div>
</div>
    );
};

export default MovieDetail;