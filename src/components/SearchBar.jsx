import { useEffect, useState } from "react";
import getApiFacade from "../facade/apiFacade";

function SearchBar({ setMovies }) {
    const [query, setQuery] = useState("");

    const onChangeHandle = (e) => {
      setQuery(e.target.value);
    }

    useEffect(() => {
      const search = async () => {
        const movies = await getApiFacade.searchMoviesByName(query);
        setMovies(movies || []);
      };
      const fetchAll = async () => {
        try {
          const movieData = await getApiFacade.getAllMovies();
          setMovies(movieData.results || []);
        } catch (error) {
          console.error("Error fetching movies:", error);
        }
      };

      //Fetch all movies if query is empty
      if (query != "") {
        search();
      } else {
        fetchAll();
      }
    }, [query]);

    return ( 
        <div className="w-full max-w-[768px] mx-auto relative">
          <label className="absolute top-0 left-4 -translate-y-2/3 z-20 bg-white text-2xl px-1">Search</label>
          <input onChange={onChangeHandle} defaultValue={query} className="border rounded p-2 z-10 border-neutral-900 w-full"/>
        </div>
     );
}

export default SearchBar;