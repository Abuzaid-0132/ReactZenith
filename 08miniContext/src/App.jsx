import React, { useContext } from "react";
import UserContextProvider from "./context/UserContextProvider";
import "./App.css";
import Login from "./component/Login";
import Profile from "./component/Profile";

function App() {
  return (
    <UserContextProvider>
      <h1>React is chai.</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
