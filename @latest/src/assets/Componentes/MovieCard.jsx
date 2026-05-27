import './MovieCard.css'

const MovieCard = ({ imdbID, Title, Poster, onSelect }) => {
    return (

        <div className="movie-card">

            <img
                src={Poster}
                alt={Title}
                onClick={() => onSelect(imdbID)}
            />

            <h2>{Title}</h2>

        </div>
    );
};

export default MovieCard;