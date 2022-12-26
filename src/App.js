import React from 'react';
import './App.css';
import Banner from './Components/Banner/Banner.js';
import Navbar from './Components/NavBar/NavBar.js';
import Rowpost from "./Components/Rowpost/Rowpost";
import { trending, original, comedy, adventure, drama, horror, thriller } from "./constants/url"


function App() {
  return (
    <div className="App" >
      <header className="App-header" onScroll={(event) => {
      }}>
        <Navbar />
        <Banner />
        <Rowpost title="Netflix Originals" url={original} isLarge />
        <Rowpost title="Comedy" url={comedy} />
        <Rowpost title="Adventure" url={adventure} />
        <Rowpost title="Trending" url={trending} />
        <Rowpost title="Drama" url={drama} />
        <Rowpost title="Horror" url={horror} />
        <Rowpost title="Thriller" url={thriller} />

      </header>
    </div>
  );
}

export default App;
