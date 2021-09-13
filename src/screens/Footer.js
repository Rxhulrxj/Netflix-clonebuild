import React from 'react';
import '../screens/footer.css';

function Footer() {
    return (
        <div className="footer">
            <hr></hr>
            <div className="footer__img">
                <a href="https://www.themoviedb.org"><img className="tmdb" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="Tmdb"
                width="100" height="100" title="TMDB"/></a>
                <a href="https://github.com/Rxhulrxj/Netflix-clonebuild"><img className='git' src ="https://github.com/darwin619/Netflix-Clone/blob/master/src/Assets/github.png?raw=true" 
                alt="github"
                width="80" height="80" title="Github"></img></a>
                </div>
                <div className="credits">
                    <p className="credit">
                        copyright @ 2021 
                        <br/>&nbsp;by Rahul Raj.N
                    </p>
                </div>
        </div>
    )
}

export default Footer
