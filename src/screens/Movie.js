import React from 'react';
import '../screens/App.css';
import Movieban from '../Components/Banner/Movieban';
import NavBar from '../Components/NavBar/NavBar';
import Movierowpost from '../Components/Rowpost/Movierowpost';
import {movienow,moviepopular,movietop,movielat,action,Romance,Horror,Comedy,documentaries} from '../urls';
import Footer from './Footer';

function Movie() {
    return (
        <div className="App">
        <NavBar/>
        <Movieban/>
        <Movierowpost  url ={movienow} title ="Trending"/>
        <Movierowpost  url ={movielat} title ="Latest Movies" isSmall/>
        <Movierowpost  url ={moviepopular} title ="Most Viewed" isSmall/>
        <Movierowpost  url ={movietop} title ="Top Rated of All Time" isSmall/>
        <Movierowpost  url ={action} title ="Action Movies" isSmall/>
        <Movierowpost  url ={Romance} title ="Romantic Movies" isSmall/>
        <Movierowpost  url ={Horror} title ="Horror Movies" isSmall/>
        <Movierowpost  url ={Comedy} title ="Comedy Movies" isSmall/>
        <Movierowpost  url ={documentaries} title ="Documentaries" isSmall/>
        <Footer />
        
        </div>
    )
}

export default Movie;
