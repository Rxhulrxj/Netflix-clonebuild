import React from 'react';
import { useSelector } from 'react-redux';
import {selectUser} from '../features/counter/userSlice';
import NavBar from '../Components/NavBar/NavBar';
import "../screens/Profile.css";
import { auth } from '../firebase';

function Profile() {
    const user = useSelector(selectUser);
    return (
        <div className="profile">
            <NavBar />
            <div className="profile_body">
                <h1> Profile</h1>
                <div className="profile_info">
                    <img src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="avatar" />
                    <div className="profile__details">
                        <h2>{user.email}</h2>
                        <div className="profile__plans">
                            <h3>Plans(current plan : Premium)</h3>
                            <h2>Renewal Date: 15/12/2025</h2><br/>
                            <div className="plan__details__main">
                            <div className="plan__details">
                            <div className="plans">
                            <h5 className="plan__name">Netflix Basic </h5>
                            <h6 className="plan__quality">480p </h6>
                            </div>
                            <button className="sub__basic">Subscribe</button>
                            </div>
                            <br/><br/>
                            <div className="plan__details__2">
                            <div className="plans">
                            <h5 className="plan__name">Netflix Standard </h5>
                            <h6 className="plan__quality">1080p </h6>
                            </div>
                            <button className="sub__basic">Subscribe</button>
                            </div>
                            <br/><br/>
                            <div className="plan__details__3">
                            <div className="plans">
                            <h5 className="plan__name">Netflix Premium </h5>
                            <h6 className="plan__quality">4K + HDR </h6>
                            </div>
                            <button className="sub__basic__curr" type="button" disabled>Current Plan</button>
                            </div>
                            </div>
                            <button onClick={() =>auth.signOut()} 
                            className="profile__signout">Sign Out</button>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
