import { navigate } from "@reach/router"; // npm I @reach/router --force
import React, { useState } from "react";
// import axios from "axios";

const Form = () => {
  const [category, setCategory] = useState("");
  const [id, setId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/${category}/${id}`);
    setId("");
    setCategory("");
  };
  return (
    <form onSubmit={handleSubmit}>
      Search For:{" "}
      <select onChange={(e) => setCategory(e.target.value)} value={category}>
        <option value="">------</option>
        <option value="people">People</option>
        <option value="planets">Planets</option>
      </select>
      ID:{" "}
      <input type="text" onChange={(e) => setId(e.target.value)} value={id} />
      <button type="submit">Search</button>
    </form>
  );
};

export default Form;
