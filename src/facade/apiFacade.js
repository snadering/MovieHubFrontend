import axios from "axios";

const apiFacade = () => {
  const options = {
    method: "GET",
    url: "http://localhost:8000/movies",
  };

  const getAllMovies = async () => {
    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    getAllMovies,
  };
};

const getApiFacade = apiFacade();
export default getApiFacade;
