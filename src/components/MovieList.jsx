import MovieCard from "./MovieCard";
import getApiFacade from "../facade/apiFacade";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movieData = await getApiFacade.getAllMovies();
        setMovies(movieData.results || []);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {movies.map((movie, index) => (
          <Link to={`/movies/${movie.id}`} key={movie.id}>
            <MovieCard {...movie} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
