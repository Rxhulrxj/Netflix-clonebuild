import React,{useEffect, useState} from 'react'
import {imageUrl} from '../../constants/constants'
import axios from '../../axios'
import './Banner.css';
import {trending} from '../../urls';

function Banner(){
    const[movie,setMovie] =useState([]); 
    
    useEffect(() => {
         async function fetchData(){
            const request = await axios.get(trending.fetchTrending);
                setMovie(request.data.results[
                    Math.floor(Math.random() *request.data.results.length -1)
                ]
                );
                return request;
        }
        fetchData();
    },[]);
// // const [shown, setShown] = useState(false)
    // // const VideoModal = (props) => {
    // //     return /*<div style={{position: "absolute", top: 70, bottom: 0, left: 500, right: 0}}>
    // //       <iframe
    // //           title={props.src}
    // //           allowFullScreen
    // //           frameBorder="0"
    // //           height="600px"
    // //           src={props.src}
    // //           width="800px"
    // //       />
    // //       </div>*/
    // }
    return (
        <div
        style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}
        className="banner">
            <div className="content" >
                <h1 className="title">{movie?.title||movie?.name||movie?.original_name}</h1>
                <h4 className='year-details'>{movie ? movie.vote_average : ""}☆&nbsp;&nbsp;<i className="fab fa-imdb"></i></h4> 
                 <div className="btn-toolbar">
                {/* {shown ? <VideoModal src="https://www.youtube.com/embed/htqXL94Rza4"/> : null} */}
                    {/* <button className="button" onClick={() => setShown(!shown)} ><i className="fas fa-play"></i>  Play</button>&nbsp; */}
                    <button className="button" ><i className="fas fa-play"></i>  Play</button>&nbsp;

                    <button className="button"><i className="fas fa-list"></i>  Mylist</button>
                </div>
                <h1 className="Descrption">{movie ? movie.overview : ""}</h1>
            </div>
        </div>
    )
}

export default Banner
