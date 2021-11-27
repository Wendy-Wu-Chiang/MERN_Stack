import Display from "./components/Display";
import Generator from "yeoman-generator";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [boxList, setBoxList] = useState([]); //lifting state.
  return (
    <div className="App">
      <h2>Box Generator</h2>
      <Generator boxList={boxList} setBoxList={setBoxList} />
      <Display boxList={boxList} />
    </div>
  );
}

export default App;
