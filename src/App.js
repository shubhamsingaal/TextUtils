import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "green";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
      <div className="container">
      <Textform heading="Enter the text to Analyse" mode={mode}/>
      </div>
    </>
  );
}

export default App;
