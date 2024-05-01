import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";




import WorksPage from "./Components/WorksPage";
import AboutPage from "./Components/AboutPage";
import ExpertisePage from "./Components/ExpertisePage";
import ErrorPage from "./Components/ErrorPage"; 


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router basename="/">
    <Routes>
      <Route path="/" element={<App />} />
      <Route exact path="/works" element={<WorksPage />} />
      <Route exact path="/about" element={<AboutPage />} />
      <Route exact path="/expertise" element={<ExpertisePage />} />
      <Route exact path="*" element={<ErrorPage />} />
    </Routes>
  </Router>
);
