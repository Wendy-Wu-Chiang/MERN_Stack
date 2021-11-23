import "./App.css";
import React from "react";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [colorArr, setColorArr] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const colorBox = {
      color,
      width,
      height,
    };
    setColorArr([colorBox, ...colorArr]);
    setColor("");
    setHeight("");
    setWidth("");
  };

  const boxStyle = {
    display: "inline-block",
    marginLeft: "17px",
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setColor(e.target.value)}
          value={color}
        />
        <input
          type="text"
          onChange={(e) => setWidth(e.target.value)}
          value={width}
        />
        <input
          type="text"
          onChange={(e) => setHeight(e.target.value)}
          value={height}
        />
        <button type="submit">Submit</button>
        <hr />
      </form>
      <h2>Color boxes</h2>
      {colorArr.map((box, index) => (
        <div
          key="index"
          style={{
            ...boxStyle,
            backgroundColor: box.color,
            width: box.width + "px",
            height: box.height + "px",
          }}
        ></div>
      ))}
    </div>
  );
}

export default App;
