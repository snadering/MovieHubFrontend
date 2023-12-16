import MovieCard from "./MovieCard";
import getApiFacade from "../facade/apiFacade";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Audio } from "react-loader-spinner";

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
    <>
      {Object.keys(movies).length === 0 ? (
        <div className="flex justify-center w-full">
          <Audio
            height="200"
            width="200"
            radius="9"
            color="orange"
            ariaLabel="loading"
            wrapperStyle=""
            wrapperClass=""
          />
        </div>
      ) : (
        <>
          <div className="container mx-auto p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {movies.map((movie, index) => (
                <Link to={`/movies/${movie.id}`} key={movie.id}>
                  <MovieCard {...movie} />
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MovieList;
