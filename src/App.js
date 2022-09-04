import "./App.css";
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";

import { Home } from "./MyComponents/Home";
import React from "react";
import { About } from "./MyComponents/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header title="My Todos List" searchBar={false}></Header>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
