const nums = [1, 2, 3, 4, 5];

const newNums = [];

for (let i = 0; i < nums.length; i++) {
  newNums.push(nums[i] * 2);
}

console.log(newNums); // logs [2, 4, 6, 8, 10]
// ------------------------------------------------------

const nums = [1, 2, 3, 4, 5];

const newNums = nums.map((num) => {
  return num * 2;
});

console.log(newNums); // logs [2, 4, 6, 8, 10]

// --------------------------------------------------------

const nums = [1, 2, 3, 4, 5];

function double(num) {
  return num * 2;
}

const newNums = nums.map(double);

console.log(newNums); // logs [2, 4, 6, 8, 10]

// --------------------------------------------------------

import React from "react";

const Groceries = (props) => {
  // this could just as easily come from props
  const groceryList = ["pearl onions", "thyme", "cremini mushrooms", "butter"];
  return (
    <ul>
      {groceryList.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default Groceries;

// -----------------------------------------------------------
