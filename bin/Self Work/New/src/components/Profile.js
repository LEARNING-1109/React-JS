import React from "react";

import {useNavigate} from "react-router-dom";

function Profile() {
  let navigate = useNavigate();

  return (
    <>
      <h1> My Profile is HERE. </h1>;
      <button onClick={ () =>{navigate("/about")} } > Change to About Page</button>
    </>
  );
}

export default Profile;


