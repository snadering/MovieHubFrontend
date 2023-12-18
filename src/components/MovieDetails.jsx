import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getApiFacade from "../facade/apiFacade";
import { Audio } from "react-loader-spinner";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  const [userRating, setUserRating] = useState(0)

  const handleRatingChange = (e) => {
    setUserRating(Number(e.target.value))
  }

  const handleRatingSubmit = async (e) => {
    e.preventDefault()
    try {
      await getApiFacade.submitUserRating(id, userRating)
    } catch (error) {
      console.log("Error submitting rating", error)
    }
  }

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
    <div className="flex justify-center p-4">
      <h1 className="text-4xl">Movie Details</h1>
    </div>
      {Object.keys(movie).length === 0 ? (
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
            <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md border border-black">
              <div className="p-4">
                <h1 className="text-2xl font-semibold mb-2">{movie.title}</h1>
                <hr className="m-2"/>
                <p className="text-gray-600 opacity-50">#{movie.id}</p>
                <p className="text-gray-600">
                  <strong>Release Date:</strong> {movie.release_date}
                </p>
                <p className="text-gray-600">
                  <strong>Overview:</strong> {movie.overview}
                </p>
                <p className="text-gray-600">
                  <strong>Rating:</strong> {movie.vote_average.toFixed(1)}
                </p>
                <p className="text-gray-600">
                  <strong>Votes:</strong> {movie.popularity.toFixed(0)}
                </p>
              </div>
            </div>
          </div>
          <div className="container mx-auto p-8">
            <form onSubmit={handleRatingSubmit} className="flex flex-col items-center">
              <label htmlFor="userRating" className="mb-2">
                Your Rating:
              </label>
              <div className="flex items-center">
                <input
                  type="range"
                  id="userRating"
                  name="userRating"
                  min="0"
                  max="10"
                  step="0.1"
                  value={userRating}
                  onChange={handleRatingChange}
                  className="w-64"
                />
                <span className="ml-2">{userRating.toFixed(1)}</span>
              </div>
              <button type="submit" className="mt-4 border rounded px-4 py-2 border-neutral-900 cursor-pointer">
                Submit Rating
              </button>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default MovieDetails;
