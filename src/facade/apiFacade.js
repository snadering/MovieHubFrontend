const apiFacade = () => {

    const API_KEY = import.meta.env.VITE_API_KEY;
    
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`
        }
    };

    const getAllMovies = async () => {
        try {
            const response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options);
            const data = await response.json();
            return data;
        } catch (error) {
            throw new Error(error);
        }
    }

    return {
        getAllMovies,
    };

}

const getApiFacade = apiFacade();
export default getApiFacade;