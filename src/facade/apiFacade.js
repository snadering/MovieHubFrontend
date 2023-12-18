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

  const getUserRating = async (movieId) => {
    const options = {
      method: "GET",
      url: `${baseUrl}/movies/${movieId}/rating`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${dbFacade().getToken()}`,
      },
    };

    try {
      const response = await axios.request(options);

      return response.data.rating;
    } catch (error) {
      return 0;
    }
  }

  const submitUserRating = async (movieId, rating) => {
    const options = {
      method: "POST",
      url: `${baseUrl}/movies/${movieId}/rating`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${dbFacade().getToken()}`,
      },
      data: JSON.stringify({ rating: rating }),
    };

    try {
      const response = await axios.request(options);
      return response.status == 201;
    } catch (error) {
      return false;
    }
  };

  return {
    getAllMovies,
    getMovieById,
    searchMoviesByName,
    getUserRating,
    submitUserRating,
  };
};

const getApiFacade = apiFacade();
export default getApiFacade;
