import React, { useState } from 'react'
import "./login.css";
import SignUp from './SignUp';
function Login() {
    const[signIn,setSignIn] =useState(false);
    return (
        <div className="Login">
            <div className="Login_screen">
              <div className="loginscreen nav">
                  <img className="login_logo" src="https://github.com/darwin619/Netflix-Clone/blob/master/src/Assets/logo.png?raw=true" alt="background"></img>
                  <button onClick={() => setSignIn(true)} className="button_signin">Sign In</button>
                  <div className="loginscreen_gradient"></div>

              </div>
              <div className="loginscreen_body">
                  {signIn ? (
                      <SignUp/>
                  ) : (
                <>
                  <h1>Unlimited movies, TV shows and more.</h1>
                  <h2>Watch anywhere. Cancel anytime.</h2>
                  <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                  <div className="loginscreen__input">
                      <form>
                          <input type="email" placeholder="Email address"/>
                          <button onClick={() => setSignIn(true)} 
                          className="email__button">GET STARTED</button>
                      </form>
                  </div>
                </>
                  )
                  }
              </div>
              
            </div>
            
        </div>
    );
}

export default Login
