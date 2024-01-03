import { useState } from "react";
import SearchBar from "./SearchBar";
import MovieCardList from "./MovieCardList";
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
        <SearchBar setMovies={setMovies} />
        <MovieCardList movies={movies} baseUrl={baseUrl} backdropSize={backdropSize} />
      </div>
      <PaginationButtons pageNumber={pageNumber} totalPages={totalPages} handlePageChange={handlePageChange}/>
    </>
  );
};

export default MovieList;
