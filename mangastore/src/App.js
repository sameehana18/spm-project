import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";


function App() {
  return (
    <div>
      <Navbar />
      <div className="container my-3" style={{margin: "16px 40px"}}>
        <Sidebar />
        <Home display={"inline-block"} marginLeft={"350px"} width={"1000px"}/>
      </div>
    </div>
  );
}

export default App;
