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
        setMovies(movies);
      }

      if (query != "") {
        search();
      }
    }, [query])

    return ( 
        <div className="w-full max-w-[768px] mx-auto relative">
          <label className="absolute top-0 left-4 -translate-y-2/3 z-20 bg-white text-2xl px-1">Search</label>
          <input onChange={onChangeHandle} className="border rounded p-2 z-10 border-neutral-900 w-full"/>
        </div>
     );
}

export default SearchBar;