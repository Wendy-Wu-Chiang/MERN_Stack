import React, { useState, useEffect } from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";

const ViewAll = (props) => {
  const [allPlayers, setAllPlayers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api")
      .then((res) => {
        console.log(res.data);
        setAllPlayers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteHandler = (id) => {
    axios
      .delete(`http://localhost:8000/api/player/${id}`)
      .then((res) => {
        console.log(res.data);
        setAllPlayers(allPlayers.filter((player) => player._id !== id));
      })
      .catch((err) => {
        console.log("Filter author list did not went through");
        console.log(err);
      });
  };

  return (
    <div>
      <header>
        <h1>All players</h1>
        <Link to={"/player"}>Add Player</Link>
      </header>
      <table
        className="table table-bordered"
        style={{ margin: "auto", border: "2px solid black" }}
      >
        <thead style={{ backgroundColor: "lightgrey", color: "black" }}>
          <tr>
            <th>Player</th>
            <th>Position</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {allPlayers
            ? allPlayers.map((player, index) => (
                <tr key={index}>
                  <td>{player.name} </td>
                  <td>{player.position}</td>
                  <td>
                    <button
                      type="submit"
                      className="btn btn-secondary"
                      onClick={() => {
                        navigate(`/edit/${player._id}`);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      type="submit"
                      className="btn btn-danger"
                      onClick={(e) => deleteHandler(player._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default ViewAll;
