import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CatDetail from "./pages/CatDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/cat/:catId" element={<CatDetail />} />
      </Routes>
    </Router>
  );
}

export default App; 