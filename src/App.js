import React from "react";
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Switch 
} from "react-router-dom";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
     
    <BrowserRouter>
    <Navbar />
      <Routes>
      <Route exact path="/" element={<Home />} />
     <Route exact path="/rooms" element={<Rooms />} />
     <Route exact path="/single-room" element={<SingleRoom/>} />
     <Route path="*" element={<Error/>} />
      
      </Routes>
    </BrowserRouter>
     
      
    </div>
  );
}

export default App;
