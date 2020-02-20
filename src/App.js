import React, { useState, useEffect} from 'react';
import axios from "axios";
import './App.css';
import Header from './components/Header';
import SearchContext from "./utils/SearchContext";
import API from './utils/API';
import debounce from 'debounce-promise'
const debouncedApiCall = debounce(API.getMovie, 500);

function App() {
  const [search, setSearch] = useState("The Matrix");
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    debouncedApiCall(search).then(movies => setMovies(movies));
  }, [search])
  return (
    <SearchContext.Provider value={{search, setSearch: event => setSearch(event.target.value)}} >
      <div className="App">
        <Header />
        <hr/>
        <ul>
          {
            movies.map(movie => {
              return <li key={movie.imdbID}>{movie.Title}</li>
            })
          }
          
        </ul>
      </div>
    </SearchContext.Provider>
  );
}

export default App;
