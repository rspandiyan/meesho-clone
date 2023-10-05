import React from "react-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./component/home";
import Kids from "./component/kids";
import Mens from "./component/mens";
import Women from "./component/womens";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/kids" element={<Kids/>}/>
        <Route path="/mens" element={<Mens/>}/>
        <Route path="/womens" element={<Women/>}/>
        
      </Routes>
    </div>
  );
}
export default App;
