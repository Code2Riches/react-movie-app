import MovieSidebar from "../Components/MovieSidebar";
import { Outlet } from "react-router-dom";

const MovieLayout = (props) => {
        // const {movieList} = props; ** No ned for this since "props.movieList"
    return (
        <div className="movie-layout">
            <MovieSidebar movieList={props.movieList}/>
            <div className="movie-content">
             <Outlet />
            </div>
        </div>
    )
}

export default MovieLayout;