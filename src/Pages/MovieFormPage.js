import { useState } from "react";

const MovieFormPage = (props) => {
  const { handleAddMovie } = props;
  const [title, setTitle] = useState("");

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
        <button
            onClick={() => {
            handleAddMovie(title);}}>
            Add Movie
        </button>
    </div>
  );
};

export default MovieFormPage;
