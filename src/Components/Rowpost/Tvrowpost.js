import React,{useEffect, useState} from 'react'
import './Rowpost.css';
import axios from '../../axios'
import {imageUrl} from '../../constants/constants'
import {} from '../../urls';

function Tvrowpost(props) {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get(props.url).then((response)=>{
            setMovies(response.data.results)
        })
        // eslint-disable-next-line
    }, [])
    return (
        <div className="row">
            <br/><br/>
            <h2>{props.title}</h2>
            <div className="movies">
                {movies.map((obj)=>
                
                <img className={props.isSmall ?'smallPoster':'poster'} src= {`${imageUrl+obj.poster_path}`} alt="Movies" />
                )}
            </div>
        </div>
    )
}

export default Tvrowpost