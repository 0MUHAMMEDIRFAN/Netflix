import React, { useEffect } from 'react';
import "./Banner.css";
import axios from '../axios';
import constants from '../../constants/constants';
import { useState } from 'react';

function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {

    axios.get(`/trending/all/day?api_key=${constants.API_KEY}&language=en-US`).then((response) => {
      setMovie(response.data.results[Math.floor(Math.random() * 19)]);
      console.log(response.data.results);


    })

  }, [])

  const playMovie = () => { 
    
  }

  return (
    <div className='banner' style={{ background: `url(${movie ? constants.imageUrl + movie.backdrop_path : ""})` }}>
      <div className='content'>
        <h1 className="title">{movie ? movie.title ? movie.title : movie.name : ""}</h1>
        <div className='banner-buttons'>
          <button className='button' onClick={() => { playMovie() }}>Play</button>
          <button className='button'>My List</button>
        </div>
        <h1 className="description">{movie ? movie.overview : ""}</h1>
      </div>
      <div className='fade-bottom'></div>

    </div>
  )
}

export default Banner;
