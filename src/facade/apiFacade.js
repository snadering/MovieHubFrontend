const apiFacade = () => {

    
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTQ2NDZlMWIwNDAwMzdmZTdhNmRjNmFhNjk3YzczOCIsInN1YiI6IjY1NzZlMjlkZTkzZTk1MjE5MmNjMWQ5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EkNKXaCzAG8WADw4ELkDUbP6Mo9AvtCbdpMatZLEJOg'
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