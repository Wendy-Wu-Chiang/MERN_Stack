import React, { useState, useEffect } from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";

const AddPlayer = (props) => {
  const [position, setPosition] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({});
  const allPositions = ["PG", "SG", "SF", "PF", "C"];

  const newSubmitHandler = (e) => {
    e.preventDefault();
    const NewPlayerData = {
      name,
      position,
    };
    axios
      .post("http://localhost:8000/api/player", NewPlayerData)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);

        setErrors(err.response.data.errors);
      });
  };

  return (
    <div>
      <form onSubmit={newSubmitHandler}>
        <header>
          <h1>Add player</h1>
          <Link to={"/"}>Player List</Link>
        </header>
        <label>Player Name:</label>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          value={name}
        />
        {/* {errors.name ? <span>{errors.name.message}</span> : null} */}
        <lable>Prefferd position:</lable>
        <select
          name="position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        >
          <option value=""></option>
          {allPositions.map((positionType, index) => (
            <option value={positionType} key={index}>
              {positionType}
            </option>
          ))}
        </select>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPlayer;
