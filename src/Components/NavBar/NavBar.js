import React, {useState, useEffect } from 'react'
import {useHistory} from "react-router-dom";
import './NavBar.css';

function NavBar() {
    const [show,handleShow] = useState(false);
    const history = useHistory();

    useEffect(() => {
        window.addEventListener("scroll", () =>{
            if(window.scrollY>100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll", null);
        };
    },[]);



    return (
        <div className={`navbar ${show && "nav__black"}`}>
            <img 
            onClick ={() => history.push("/")}
            className="logo" src="https://github.com/darwin619/Netflix-Clone/blob/master/src/Assets/logo.png?raw=true" alt="Netflix"></img>
            <img 
            onClick ={() => history.push("/profile")}
            className="Avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar"></img>
        </div>
    )
}

export default NavBar
