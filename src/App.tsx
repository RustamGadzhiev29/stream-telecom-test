import React from "react";
import "./App.scss";
import Table from "./components/table/Table";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import { Layout } from "antd";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import FirstTask from "./components/firstTask/FirstTask";
import SecondTask from "./components/secondTask/SecondTask";
import "antd/dist/reset.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Routes>
        <Route path="/third" element={<Table />} />
        <Route path="/first" element={<FirstTask />} />
        <Route path="/second" element={<SecondTask />} />
      </Routes>
    </div>
  );
}

export default App;
