import {Routes, Route} from "react-router-dom";
import './App.css';
import { useState, useEffect } from 'react';
import Home from './components/Home';
import AboutView from './components/AboutView';
import Navbar from './components/Navbar';
import SearchView from './components/SearchView';

function App() {
  
  const [searchResults, setSearchResults] = useState ([]);
  const [searchText, setSearchText] = useState ('');

  useEffect(() => {
    if(searchText) {
      fetch(`https://api.themoviedb.org/3/search/company?api_key=11212f71e357d9fe6b5473b65bd724b6&query=${searchText}&page=1`)
      .then(response => response.json())
      .then(data => {
        setSearchResults(data.results)
      })
    }
  }, [searchText])

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
      </Routes>

    </div>
  );
}

export default App;
