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

  // console.log(searchText, "is the default")
  // setTimeout(() => {
  //   setSearchText("New text")
  //   console.log(searchText, "is the new text")
  // }, 2000)
  
  

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutView />} />
        <Route path='/search' element={<SearchView keyword={searchText} searchResults={searchResults}/>} />
      </Routes>

    </div>
  );
}

export default App;
