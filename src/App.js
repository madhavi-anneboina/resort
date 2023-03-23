import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

import Navbar from "./components/Navbar";

import {  Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
         <Route path="/" exact element={<Home/> } />
         <Route path="/rooms/" exact element={<Rooms/> } />
         <Route exact path="/rooms/:slug"  element={<SingleRoom/> } />
         <Route exact element={<Error/> } />
      </Routes>
    </>
  );
}

export default App;
