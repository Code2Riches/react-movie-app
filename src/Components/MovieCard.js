const MovieCard = (props) => {
    return (
        <div className="movie-list-card">
            <h2>{props.movie.Title}</h2>
            <p>{props.movie.Director}</p>
            <img className="movie-img" src={props.movie.Images[0]}></img>
        </div>
    )
};

export default MovieCard;