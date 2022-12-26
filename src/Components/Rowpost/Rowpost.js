import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import "./Rowpost.css";
import constants from "../../constants/constants";
import axios from "../axios.js"


function Rowpost(props) {

    const [movies, setMovies] = useState([]);

    useEffect(() => {

        axios.get(props.url).then((response) => {
            setMovies(response.data.results)
            // console.log(response.data.results)
        }).catch(err => {
            // alert("Network error!")
        })

        // console.log(movies ? movies : "j")

    }, [])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    const [urlId, setUrlId] = useState("")
    const handleMovie = (id) => {
        axios.get(`/movie/${id}/videos?api_key=${constants.API_KEY}&language=en-US`).then((response) => {
            if (response.data.results.length !== 0) {
                response.data.results.map((obj) => {
                    if (obj.type === "Trailer") {
                        setUrlId(obj.key);
                    }
                })
            } else {
                setUrlId("")
            }
        }).catch(err=>{
            setUrlId("")
        })
    }

    return (
        <div className="rowpost" >
            <h2 className="title">{props.title}</h2>
            <div className="row">
                {movies.map((obj, key) =>
                    <img className="image" onClick={() => { handleMovie(obj.id); }} src={props.isLarge ? `${constants.imageUrl1 + obj.backdrop_path}` : `${constants.imageUrl4 + obj.poster_path}`} alt="Low internet" />

                )}

            </div>
            {urlId && <YouTube videoId={urlId} opts={opts} />}
        </div >
    )
}

export default Rowpost;