// App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Homepage from "./components/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Login} />
        <Route exact path="/homepage" Component={Homepage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
