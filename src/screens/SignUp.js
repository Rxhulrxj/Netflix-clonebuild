import React, { useRef, useState} from 'react'
import {auth} from '../firebase';
import './Signup.css';

function SignUp() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((userCredential) => {
            userCredential.user.sendEmailVerification();
            auth.signOut();
            alert("Verification Link has been sent to the Email.Please verify and login.");

        }).catch((error) => {
            alert(error.message);
        });
    };
    
    const signIn=(e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(() => {
            console.log(".");
        }).catch((error) =>
            alert(error.message));
    };
const [passwordShown, setPasswordShown] = useState(false);
const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
return (
        <div className="signup">
            <form>
                <h1>Sign In</h1>
                <input ref = {emailRef} placeholder="Email" type="email" autoFocus required/>
                <input ref = {passwordRef} placeholder="Password" type={passwordShown ? "text" : "password"} minLength ='4' maxLength="16" required/>
                <i className={passwordShown ? "far fa-eye-slash" : "far fa-eye"} id="eye" onClick={togglePasswordVisiblity}></i>
                <button type="submit" onClick={signIn}>Sign In</button>
                <h4><span className="Signup__gray">New to Netflix?</span><span className="Signup__Link" onClick={register}>Sign Up Now</span><br />(fill up the above details and click sign up now to register)</h4>
            </form>
        </div>
    )
};

export default SignUp
