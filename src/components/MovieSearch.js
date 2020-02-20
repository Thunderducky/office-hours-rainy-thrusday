import React, { useContext } from "react";
import SearchContext from "../utils/SearchContext";
function MovieSearch(){
    const {search, setSearch} = useContext(SearchContext);
    return <input 
        value={search} 
        onChange={setSearch} 
        type="text"
    />
}

export default MovieSearch;