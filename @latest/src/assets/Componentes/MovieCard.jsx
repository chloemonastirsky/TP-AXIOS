const MovieCard = ({ imdbID, Title, Poster, onSelect }) => {
    return (
        <div className="movie-card" onClick={() => onSelect(imdbID)}>
            <img src={Poster} alt={Title} />
            <h2>{Title}</h2>
        </div>
    );
};

export default MovieCard;