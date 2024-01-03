import MovieCard from "./MovieCard";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Audio } from "react-loader-spinner";
import SearchBar from "./SearchBar";
import PaginationButtons from "./PaginationButtons";

const MovieList = ({ baseUrl, backdropSize }) => {
  const [movies, setMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(10);

  const handlePageChange = (action) => {
    if (action === "next" && pageNumber < totalPages) {
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
    } else if (action === "prev" && pageNumber > 1) {
      setPageNumber((prevPageNumber) => prevPageNumber - 1);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="container mx-auto p-8 space-y-8">
        <SearchBar setMovies={setMovies} page={pageNumber} />
      <PaginationButtons pageNumber={pageNumber} totalPages={totalPages} handlePageChange={handlePageChange}/>
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
                />
              </Link>
            ))}
          </div>
        )}
      </div>
      <PaginationButtons pageNumber={pageNumber} totalPages={totalPages} handlePageChange={handlePageChange}/>
    </>
  );
};

export default MovieList;
