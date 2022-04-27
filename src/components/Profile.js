import React from "react";
import "../styles/Profile.scss";
import { Navigate } from "react-router-dom";

const Profile = () => {

    const isSubmited = JSON.parse(localStorage.getItem('isSubmited'));
    const currentData =  JSON.parse(localStorage.getItem('currentdata'));
   
    if(!isSubmited)  return <Navigate to="/login" />;

    return  (
        <div className="profile">
               <div className="profile-row">
                    <div className="col-md-4 animated fadeIn">
                        <div className="profile-card">
                            <div className="card-body">
                                <div className="profile-avatar">
                                    <img src={currentData.avatar} className="card-avatar-top" alt="avatar" />
                                    </div>
                                    <h5 className="profile-card__title">
                                        {currentData.name} {currentData.lastName}
                                    </h5>
                                    <p className="profile-card_text">
                                        {currentData.age}
                                    </p>
                                    <p className="profile-card_text">
                                        {currentData.position}
                                    </p>
                                    <p className="profile-card_text">
                                        {currentData.education}
                                    </p>
                                </div>
                            </div>
                    </div>
               </div>
           </div>
    )
}


export default Profile;