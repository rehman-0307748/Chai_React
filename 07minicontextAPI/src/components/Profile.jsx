import React, { useContext } from "react";
import UserContext from "./Usercontext";

function Profile() {
  const { userdata } = useContext(UserContext);

  if (!userdata?.username) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div>
      <h2>Welcome, {userdata.username}!</h2>
    </div>
  );
}

export default Profile;
