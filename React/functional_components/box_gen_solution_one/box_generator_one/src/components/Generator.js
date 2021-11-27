import React, { useState } from "react";
const Generator = (props) => {
  const { boxList, setBoxList } = props;
  const [color, setColor] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault;
    setBoxList([...boxList, color]);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <lable htmlFor="color">Color</lable>
          <input
            type="text"
            name="color"
            onChange={(e) => setColor(e.target.value)}
          />
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};
export default Generator;
