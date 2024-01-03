import { useState } from "react";
import SearchBar from "./SearchBar";
import MovieCardList from "./MovieCardList";

const MovieList = ({ baseUrl, backdropSize }) => {
  const [movies, setMovies] = useState([]);

  return (
    <>
      <div className="container mx-auto p-8 space-y-8">
        <SearchBar setMovies={setMovies} />
        <MovieCardList movies={movies} baseUrl={baseUrl} backdropSize={backdropSize} />
      </div>
    </>
  );
};

export default MovieList;
