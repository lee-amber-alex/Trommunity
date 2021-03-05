import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import "../Styles/profile.css"


function ProfileCard(props) {
  
  const { currentUser} = useAuth();
  
  return (
    <>
      <div className="card" >
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{currentUser.email}</h5>
          {/* {error && <Alert variant="danger">{error}</Alert>} */}
          <p className="card-text">
            {props.skills}
          </p>
          <a href="/profile" className="btn btn-primary">
          update 
          </a>
        </div>
      </div>
 
    </>
  );
}

export default ProfileCard;
