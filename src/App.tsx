import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Comprimento from "./Pages/Comprimento/Comprimentro";
import Area from "./Pages/Area/Area";
import Volume from "./Pages/Volume/Volume";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comprimento" element={<Comprimento />} />
        <Route path="/area" element={<Area />} />
        <Route path="/volume" element={<Volume />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
