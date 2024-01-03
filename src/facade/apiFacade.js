import axios from "axios";
import dbFacade from "./dbFacade";

const apiFacade = () => {
  const BASE_URL = "https://movie-hub-api.tobiasthedanish.dk/api/v1"
  
  const getAllMovies = async (pageNumber = 1) => {
    const options = {
      method: "GET",
      url: `${BASE_URL}/movies/page/${pageNumber}`,
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

  /**
   * 
   * @returns {Promise<any[]>}
   */
  const getAllRatings = async () => {
    const options = {
      method: "GET",
      url: `${BASE_URL}/user/ratings`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${dbFacade().getToken()}`,
      },
    }

    try {
      const response = await axios.request(options);

      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  const getUserRating = async (movieId) => {
    const options = {
      method: "GET",
      url: `${BASE_URL}/movies/${movieId}/rating`,
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
      url: `${BASE_URL}/movies/${movieId}/rating`,
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
    getAllRatings,
    getUserRating,
    submitUserRating,
    getMovieImages,
  };
};

const getApiFacade = apiFacade();
export default getApiFacade;
