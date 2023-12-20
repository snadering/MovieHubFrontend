import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getApiFacade from "../facade/apiFacade";
import { Audio } from "react-loader-spinner";

const MovieDetails = ({ baseUrl, backdropSize }) => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

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
                <img src={`${baseUrl}${backdropSize}${movie.backdrop_path}`} alt="" />
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
        </>
      )}
    </>
  );
};

export default MovieDetails;
