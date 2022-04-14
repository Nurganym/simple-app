import React from "react";
// import { useNavigate } from "react-router-dom";

const Profile = () => {

    // const navigate = useNavigate();
    const isSubmited = JSON.parse(localStorage.getItem('isSubmited'));
    console.log('isSubmited:', typeof isSubmited);
    return(
        <div>
            {isSubmited ? <h1>Welcome</h1> : <h1>Not found</h1>}
        </div>
    )
}


export default Profile;