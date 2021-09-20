import React, { useRef, useState} from 'react'
import {auth, sendPasswordResetEmail} from '../firebase';
import './Signup.css';

function SignUp() {
    const [email, setEmail] = useState("");
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
                <br />
                <input ref = {emailRef} placeholder="Email" type="email" value={email}
          onChange={(e) => setEmail(e.target.value)} autoFocus required/>
                <input ref = {passwordRef} placeholder="Password" type={passwordShown ? "text" : "password"} minLength ='4' maxLength="16" required/>
                <span className="flex-container">
                <i className={passwordShown ? "far fa-eye" : "far fa-eye-slash"} id="eye" onClick={togglePasswordVisiblity}></i> </span>
                <button type="submit" onClick={signIn}>Sign In</button>
                <span className ="forgotpass" onClick={() => sendPasswordResetEmail(email)}>Forgot Password?</span>
                <h4><span className="Signup__gray">New to Netflix?</span><span className="Signup__Link" onClick={register}>Sign Up Now</span><br />(fill up the above details and click sign up now to register)</h4>
            </form>
        </div>
    )
};

export default SignUp
