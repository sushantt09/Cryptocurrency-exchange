import React from "react";
import { BrowserRouter as Router ,Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Coins from "./Components/Coins";
import CoinDetail from "./Components/CoinDetail";
import Exchanges from "./Components/Exchanges";


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/coins/:id" element={<CoinDetail />} />
        <Route path="/exchanges" element={<Exchanges />} />
      </Routes>
    </Router>
  );
}

export default App;
