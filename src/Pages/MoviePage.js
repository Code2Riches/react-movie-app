import { useParams } from "react-router-dom";

const MoviePage = (props) => {

    const params = useParams();
    const titleParam = params.title;
    
    const foundMovie = props.movieList.find((movieItem) => {
        return movieItem.Title === titleParam
    })
        if (foundMovie.Title === params.title) {
            return (
                <div>
                    <h1>Movie Page</h1>
                    <h2>{foundMovie.Title}</h2>
                    <p>{foundMovie.Director}</p>
                    <p>{foundMovie.Actors}</p>
                    <p>{foundMovie.Plot}</p>
                </div>
            )
        }
}

export default MoviePage;
