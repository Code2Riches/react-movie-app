const MovieCard = (props) => {
    return (
        <div className="movie-list-card">
            <h2>{props.movie.title}</h2>
            <p>{props.movie.Director}</p>
        </div>
    )
};

export default MovieCard;