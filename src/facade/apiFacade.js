const apiFacade = () => {

    
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTA4NDE1YTNlZmQyMmI3N2VkNmM3ODc0MzI1MDJlYiIsInN1YiI6IjY1MGI1NDJmY2FkYjZiMDBhYmM2YjY3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3bgpWgIBh-7eCFlLg-QJ1Kh4uvvYBOpTaoQlplWCQdg'
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

    /*
    const getAllMovies = async () => {
        return await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }
    */

    return {
        getAllMovies,
    };

}

const getApiFacade = apiFacade();
export default getApiFacade;