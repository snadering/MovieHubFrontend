import MovieCard from "./MovieCard";
import getApiFacade from "../facade/apiFacade";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Audio } from "react-loader-spinner";
import SearchBar from "./SearchBar";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [baseUrl, setBaseUrl] = useState();
  const [backdropSizes, setBackdropSizes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const imageData = await getApiFacade.getMovieImages();
      setBaseUrl(imageData.secure_base_url);
      setBackdropSizes(imageData.backdrop_sizes);
    }
    fetchData();
  }, []);



  return (
    <>
      <div className="container mx-auto p-8 space-y-8">
        <SearchBar setMovies={setMovies} />
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {movies.map((movie, index) => (
              <Link to={`/movies/${movie.id}`} key={movie.id}>
                <MovieCard {...movie} baseUrl={baseUrl} backdropSize={backdropSizes[0]} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default MovieList;
