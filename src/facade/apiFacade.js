import axios from "axios";
import dbFacade from "./dbFacade";

const apiFacade = () => {
  const BASE_URL = "https://movie-hub-api.tobiasthedanish.dk/api/v1"
  
  const getAllMovies = async () => {
    const options = {
      method: "GET",
      url: `${BASE_URL}/movies`,
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
      url: `${BASE_URL}/movies/${movieId}`,
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
      url: `${BASE_URL}/movies/search?query=${query}`,
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

  const getMovieImages = async () => {
    const options = {
      method: "GET",
      url: `${BASE_URL}/movies/images`,
      headers: {
        "accept": "application/json",
        "Authorization": `Bearer ${dbFacade().getToken()}`
      }
    };
    try {
      const response = await axios.request(options);
      return response.data.images;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    getAllMovies,
    getMovieById,
    searchMoviesByName,
    getMovieImages,
  };
};

const getApiFacade = apiFacade();
export default getApiFacade;
