import React,{useEffect, useState} from 'react';
import {imageUrl} from '../../constants/constants';
import axios from '../../axios';
import './Banner.css';
import {tvtoprated} from "../../urls";

function Tvban() {
    const[movies,setMovies] =useState([]); 
    
    useEffect(() => {
         async function fetchData(){
            const request = await axios.get(tvtoprated.fetchToprated);
                setMovies(request.data.results[
                    Math.floor(Math.random() *request.data.results.length -1)
                ]
                );
                return request;
        }
        fetchData();
    },[]);
    return (
        <div
        style={{backgroundImage:`url(${movies ? imageUrl+movies.backdrop_path : movies ? imageUrl+movies.poster_path : ''})`}}
        className="banner">
            <div className="content" >
                <h1 className="title">{movies?.title||movies?.name||movies?.original_name}</h1>
                <h4 className='year-details'>{movies ? movies.vote_average : ""}☆&nbsp;&nbsp;<i className="fab fa-imdb"></i></h4> 
                 <div className="btn-toolbar">
                {/* {shown ? <VideoModal src="https://www.youtube.com/embed/htqXL94Rza4"/> : null} */}
                    {/* <button className="button" onClick={() => setShown(!shown)} ><i className="fas fa-play"></i>  Play</button>&nbsp; */}
                    <button className="button" ><i className="fas fa-play"></i>  Play</button>&nbsp;

                    <button className="button"><i className="fas fa-list"></i>  Mylist</button>
                </div>
                <h1 className="Descrption">{movies ? movies.overview : ""}</h1>
            </div>
        </div>
    )
}

export default Tvban;
