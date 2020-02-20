import axios from "axios";
export default {
    getMovie: (search) => {
        return axios.get(`https://www.omdbapi.com/?s=${search}&apikey=trilogy`)
        .then(({data}) => {
            return data.Search || []
        });
    }
}