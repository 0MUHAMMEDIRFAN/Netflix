import React from 'react';
import "./Banner.css";

function Banner() {
  return (
    <div className='banner'>
        <div className='content'>
            <h1 className="title">MONEY HEIST</h1>
            <div className='banner-buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className="description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam eaque, similique itaque qui vel quae ad magni reprehenderit nihil tempora temporibus dignissimos possimus impedit praesentium in at ratione non saepe.
            </h1>
        </div>
            <div className='fade-bottom'></div>
      
    </div>
  )
}

export default Banner;
