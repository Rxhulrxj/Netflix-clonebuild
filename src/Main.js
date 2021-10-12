import React,{useEffect} from 'react';
import App from './screens/App';
import "./main.css"; 
import {auth} from './firebase';
import Login from './screens/login';
import Profile from './screens/Profile';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {login ,logout ,selectUser} from "./features/counter/userSlice";
import Movie from './screens/Movie';
import Tv from './screens/Tv';
import Spinner from "react-spinkit";
import {useAuthState} from "react-firebase-hooks/auth";

  function Main() {
    //   const user = useSelector(selectUser);
      const dispatch = useDispatch();
      const[user ,loading] = useAuthState(auth);
      useEffect(() => {
          const unsubscribe =auth.onAuthStateChanged((userAuth) =>{
              if(userAuth){
                  dispatch(
                      login({
                      uid: userAuth.uid,
                      email: userAuth.email,
                  })
                );
              }
              else{
                  dispatch(logout());
              }
          });
          return unsubscribe;
      },[dispatch]);
      if(loading) {
        return(
          <div className="AppLoading">
            <div className="AppLoadingContents">
            <Spinner name="line-scale-pulse-out-rapid" color="purple" fadeIn="none"/>
            </div>
          </div>
          
        )
      }
      return(
          <div className="MAIN">
              <Router>
                  {!user ? (
                      <Login />
                  ):(
                  <Switch>
                      <Route exact path = '/profile'>
                          <Profile />
                      </Route>
                      <Route exact path = '/Movie'>
                          <Movie />
                      </Route>
                      <Route exact path = '/TV'>
                          <Tv />
                      </Route>
                      <Route exact path="/">
                      <App />
                      </Route>
                    </Switch>
                    )}
                </Router>
          </div>
      );
  }
  export default Main;