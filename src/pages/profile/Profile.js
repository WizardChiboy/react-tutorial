import React, { useState } from "react";

function Profile() {
  const [userDetails, setUserDetails] = useState(
    localStorage.getItem("username")
  );

  const getDetails = () => {
    const detail = localStorage.getItem("username");
    console.log(detail);
    setUserDetails(detail);
  };
  return (
    <div>
      <div>Profile</div>
      {/* <button onClick={getDetails}>get profile</button> <br /> */}
      Username is : {userDetails}
    </div>
  );
}

export default Profile;
