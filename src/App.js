import './App.css';
import React, {useState, useEffect} from "react"
// import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList';
import Header from './components/Header';
import SearchBox from './components/SearchBox';

const App = () => {

const [movies, setMovies] = useState([]);
const [searchValue, setSearchValue] = useState("")
      
const getMoiveRequest = async (searchValue) => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=4179a8c2`;

        const response = await fetch(url)
        const responseJson = await response.json()
        // console.log(responseJson);
        if (responseJson.Search) {
        setMovies(responseJson.Search)
      }
      }

      useEffect(() => {
        getMoiveRequest(searchValue);
      }, [searchValue])
      

  return (
    <div className="App">
      <div className='row d-flex align-items-center mt-4 mb-4 '>
      <Header heading= 'Movies' />
      <SearchBox searchValue = {searchValue} setSearchValue= {setSearchValue} />
      </div>
      
      <MovieList movies = {movies} />
    </div>
  );
}

export default App;
