import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [userdata, setUserdata] = useState({});

  return (
    <UserContext.Provider value={{ userdata, setUserdata }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
