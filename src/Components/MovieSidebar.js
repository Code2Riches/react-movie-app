import { Link } from "react-router-dom";

const MovieSidebar = (props) => {
    // const {movieList} = props **What is this doing here?
    return (
        <div className="movie-sidebar">
            <h2>Movie Sidebar</h2>
            {props.movieList.map((movieItem, index) => {
                return (
                    <Link to={`/movies/${movieItem.Title}`} key={index}>{movieItem.Title}</Link>
                )
            })}
        </div>
    )
}

export default MovieSidebar;