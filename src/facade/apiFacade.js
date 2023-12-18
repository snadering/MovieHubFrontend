import axios from "axios";
import dbFacade from "./dbFacade";

const apiFacade = () => {
  const baseUrl = "https://movie-hub-api.tobiasthedanish.dk/api/v1"
  
  const getAllMovies = async () => {
    const options = {
      method: "GET",
      url: `${baseUrl}/movies`,
      headers: {
        "accept": "application/json",
        "Authorization": `Bearer ${dbFacade().getToken()}`,
      },
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
      url: `${baseUrl}/movies/${movieId}`,
      headers: {
        "accept": "application/json",
        "Authorization": `Bearer ${dbFacade().getToken()}`,
      },
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
      url: `${baseUrl}/movies/search?query=${query}`,
      headers: {
        "accept": "application/json",
        "Authorization": `Bearer ${dbFacade().getToken()}`,
      },
    };
    try {
      const response = await axios.request(options);
      return response.data.results;
    } catch (error) {
      console.error(error);
    }
  };

  const submitUserRating = async (movieId, rating) => {
    const options = {
      method: "POST",
      url: `${baseUrl}/movies/${movieId}/ratings`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${dbFacade().getToken()}`,
      },
      data: { rating: rating },
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
    submitUserRating,
  };
};

const getApiFacade = apiFacade();
export default getApiFacade;
