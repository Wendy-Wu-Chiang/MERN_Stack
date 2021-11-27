import React from "react";

const Display = (props) => {
  const { boxList, setBoxList } = props;
  return (
    <div>
      {boxList.map((box, index) => (
        <div
          key="index"
          style={{
            display: "inline-block",
            margine: "7px",
            height: "70px",
            width: "57px",
            backgroundColor: color,
          }}
        ></div>
      ))}
    </div>
  );
};
export default Display;
