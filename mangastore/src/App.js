import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import React, { useState } from "react";


function App() {

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  return (
    <div>
      <Navbar onSearch={handleSearch}/>
      <div className="container my-3" style={{margin: "16px 40px"}}>
        <Sidebar />
        <Home display={"inline-block"} marginLeft={"350px"} width={"1000px"} searchTerm={searchTerm} booksPerPage={6}/>
      </div>
    </div>
  );
}

export default App;
