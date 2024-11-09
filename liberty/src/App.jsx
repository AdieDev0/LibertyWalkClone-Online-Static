import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import Links from "./Components/Links";
import Release from "./Components/Release";
import TheMost from "./Components/TheMost";
import TheEnd from "./Components/TheEnd";
import Install from "./Components/Shared/Install";
import Gallery from "./Components/Shared/Gallery";


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
        <Route path="/Gallery" element={<Gallery path />} />{" "}
        <Route path="/" element={< path />} />{" "}
        {/* Route for Install page */}
      </Routes>
    </Router>
  );
};

export default App;
