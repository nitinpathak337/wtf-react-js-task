import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import GymDetails from "./components/GymDetails";
import Content from "./components/Content";
import "./App.css";

function App() {
  return (
    <div className="bg">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Content />
              </>
            }
          />
          <Route path="/gym/:id" element={<GymDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
