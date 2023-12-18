import axios from "axios";

const apiFacade = () => {
  
  const getAllMovies = async () => {
    const options = {
      method: "GET",
      url: "http://localhost:8000/movies",
    };
    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const getMovieById = async (movieId) => {
    const options = {
      method: "GET",
      url: `http://localhost:8000/movies/${movieId}`
    }
    try {
      const response = await axios.request(options)
      return response.data;
    } catch (error){
      console.error(error);
    }
  }

  const searchMoviesByName = async (query) => {
    const options = {
      method: "GET",
      url: `http://localhost:8000/search/movies?query=${query}`,
    };
    try {
      const response = await axios.request(options);
      return response.data.results;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    getAllMovies,
    getMovieById,
    searchMoviesByName,
  };
};

const getApiFacade = apiFacade();
export default getApiFacade;
