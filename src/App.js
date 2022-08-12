import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { auth } from "./firebase";
import Router from "./Router/Router";

const App = () => {
  useEffect(() => {
    if (auth.currentUser)
      localStorage.setItem("user", auth.currentUser.photoURL);
  }, []);
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default App;
