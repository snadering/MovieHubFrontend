import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import getApiFacade from "../facade/apiFacade";

const MovieDetails = () => {

  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movieData = await getApiFacade.getMovieById(id);
        setMovie(movieData || {});
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    
    fetchMovies();
  }, [id]);

  return (
    <>
      <h1>MovieDetails</h1>
      <div className="container mx-auto p-8">
      <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md border border-black">
        <div className="p-4">
          <h1 className="text-2xl font-semibold mb-2">{movie.title}</h1>
          <p className="text-gray-600"><strong>ID:</strong> {movie.id}</p>
          <p className="text-gray-600"><strong>Release Date:</strong> {movie.release_date}</p>
          <p className="text-gray-600"><strong>Overview:</strong> {movie.overview}</p>
          <p className="text-gray-600"><strong>Popularity:</strong> {movie.popularity}</p>
          <p className="text-gray-600"><strong>Vote Average:</strong> {movie.vote_average}</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default MovieDetails;
