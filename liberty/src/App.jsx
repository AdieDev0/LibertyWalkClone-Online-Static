import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Updated import for Routes
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import Links from "./Components/Links";
import Release from "./Components/Release";
import TheMost from "./Components/TheMost";
import TheEnd from "./Components/TheEnd";
import Install from "./Components/Shared/Install"; // Import Install component

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        {/* Define Route for the components */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Links />
              <Release />
              <TheMost />
              <TheEnd />
            </>
          }
        />
        <Route path="/install" element={<Install path />} />{" "}
        {/* Route for Install page */}
      </Routes>
    </Router>
  );
};

export default App;
