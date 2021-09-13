import React from 'react';
import '../screens/App.css';
import NavBar from '../Components/NavBar/NavBar';
import Tvban from '../Components/Banner/Tvban';
import Tvrowpost from '../Components/Rowpost/Tvrowpost';
import {Tvtoprated,populartv,tvonair,Tvrec} from '../urls';
function Tv() {
    return (
        <div className="App">
        <NavBar/>
        <Tvban />
        <Tvrowpost url ={Tvtoprated} title ="Top Rated" />
        <Tvrowpost url ={Tvrec} title ="Recommended" />
        <Tvrowpost url ={populartv} title ="Popular This Week" />
        <Tvrowpost url ={tvonair} title ="More Show You Will Love" />
        
        </div>
    )
}
export default Tv;