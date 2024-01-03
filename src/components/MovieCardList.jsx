import { Audio } from "react-loader-spinner";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

function MovieCardList({ movies, baseUrl, backdropSize }) {
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {movies.map((movie, index) => (
            <Link to={`/movies/${movie.id}`} key={movie.id}>
              <MovieCard
                {...movie}
                baseUrl={baseUrl}
                backdropSize={backdropSize}
                rating={movie.rating}
              />
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

export default MovieCardList;
