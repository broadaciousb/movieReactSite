import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Results from "./pages/Results.jsx";
import Movie from "./pages/Movie.jsx";

// DATA API: https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}
// POSTER API: http://img.omdbapi.com/?i=tt3896198&apikey={API_KEY}
const API_KEY = process.env.API_KEY;
const movieAPI = `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}`;

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isNavModalOpen, setIsNavModalOpen] = useState(false);

  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  const openNavModal = () => {
    setIsNavModalOpen(true);
  };

  const closeNavModal = () => {
    setIsNavModalOpen(false);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Home
                isContactModalOpen={isContactModalOpen}
                isNavModalOpen={isNavModalOpen}
                openContactModal={openContactModal}
                closeContactModal={closeContactModal}
                openNavModal={openNavModal}
                closeNavModal={closeNavModal}
              />
            }
          />
          <Route
            path="/results"
            exact
            element={
              <Results
                isContactModalOpen={isContactModalOpen}
                isNavModalOpen={isNavModalOpen}
                openContactModal={openContactModal}
                closeContactModal={closeContactModal}
                openNavModal={openNavModal}
                closeNavModal={closeNavModal}
              />
            }
          />
          <Route path="/results/:id" element={<Movie />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
