import { useState } from "react";
import "./App.css";
import UserContextProvider from "./components/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  const [userContext] = useState(null);
  return (
    <UserContextProvider>
      <h1>Context API Example</h1>
      <p>Login to see your profile</p>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
