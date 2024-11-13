// src/App.js
import "./App.css";
import Home from "./Components/Login Form/Home";
import Login from "./Components/Login Form/Login";
import Signup from "./Components/Login Form/Signup";
import 'leaflet/dist/leaflet.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
