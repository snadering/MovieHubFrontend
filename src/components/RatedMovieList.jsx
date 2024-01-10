import { useEffect, useState } from "react";
import MovieCardList from "./MovieCardList";
import getApiFacade from "../facade/apiFacade";

function RatedMovieList({ baseUrl, backdropSize }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      let res = await getApiFacade.getAllRatings();

      if (res.length > 0) {
        res = res.sort((a, b) => {
          return b.rating - a.rating;
        })

        const movies = [];
        for (let i = 0; i < res.length; i++) {
          const value = res[i];
          const movieData = await getApiFacade.getMovieById(value.movieId);
          movieData["rating"] = value.rating;
          movies.push(movieData);
        }

        setMovies(movies);
      } 

    }

    fetch();
  }, [])

  return (
    <div className="container mx-auto p-8 space-y-8">
      {movies.length == 0 ? (
        <h2 className="text-center font-bold">You have not rated any movies yet.</h2>
      ) : (
        <MovieCardList
          movies={movies}
          baseUrl={baseUrl}
          backdropSize={backdropSize}
        />
      )}
    </div>
  );
}

export default RatedMovieList;