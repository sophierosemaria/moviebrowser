import {Routes, Route} from "react-router-dom";
import './App.css';
import { useState, useEffect } from 'react';
import Home from './components/Home';
import AboutView from './components/AboutView';
import Navbar from './components/Navbar';
import SearchView from './components/SearchView';
import MovieView from './components/MovieView';
import PageNotFound from './components/NotFoundPage';

function App() {
  
  const [searchResults, setSearchResults] = useState ([]);
  const [searchText, setSearchText] = useState ('');
  
  
  useEffect(() => {
    const fetchData = () => {
      return fetch(`https://api.themoviedb.org/3/search/movie?api_key=11212f71e357d9fe6b5473b65bd724b6&language=en-US&query=${searchText}&page=1&include_adult=false`)
        .then((response) => response.json())
        // .then((data) => console.log(data));
        .then((data) => {
          setSearchResults(data.results)
        })
    }
    if(searchText) {fetchData();}
  }, [searchText])
  // useEffect(() => {
  //   if(searchText) {
  //     fetch(`https://api.themoviedb.org/3/search/company?api_key=11212f71e357d9fe6b5473b65bd724b6&query=${searchText}&page=1`)
  //     .then(response => response.json())
  //     .then(data => {
  //       setSearchResults(data.results)
  //     })
  //   }
  // }, [searchText])

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutView />} />
        <Route 
          path='/search' 
          element={
            <SearchView 
              keyword={searchText} 
              searchResults={searchResults}
            />
          } 
        />
        <Route path="/movies/:id" element={<MovieView/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>

    </div>
  );
}

export default App;
