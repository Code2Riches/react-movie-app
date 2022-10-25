import { useState } from "react";

const MovieFormPage = (props) => {
  const { handleAddMovie } = props;
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");

  return (
    <div>
        <h1>Movie Form Page</h1>
        <label>Title: </label>
        <input
            type="text"
            value={title}
            placeholder="Title"
            onChange={(e) => 
            {setTitle(e.target.value);}}
            className="movie-form-input">
        </input>
        <br></br>
        <label>Director: </label>
        <input
            type="text"
            value={director}
            placeholder="Director"
            onChange={(e) => 
            {setDirector(e.target.value);}}
            className="movie-form-input">
        </input>
        <br></br>
        <button
            onClick={() => {
            handleAddMovie(title, director)}}>
            Add Movie
        </button>
    </div>
  );
};

export default MovieFormPage;
