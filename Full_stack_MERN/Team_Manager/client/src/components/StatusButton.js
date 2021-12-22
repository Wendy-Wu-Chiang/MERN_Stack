import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const StatusButton = (props) => {
  const { player, game, gameIndex, setGame, setGameIndex, index } = props;

  const editStatus = (e) => {
    setGameIndex([gameIndex]);

    player[game[gameIndex].date] = e.target.value;

    axios
      .put("http://localhost:8000/api/player/" + player._id, player)
      .then((response) => {
        console.log(response.data.name);
        console.log(player);
        console.log(gameIndex);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {player[game[gameIndex].date] == "Playing" ? (
        <button
          onClick={editStatus}
          name="Playing"
          value="Playing"
          className="cursor-pointer bg-green-200 p-2 mt-2 mx-1 
                    border-4 border-black w-26 rounded"
        >
          Playing
        </button>
      ) : (
        <button
          onClick={editStatus}
          name="Playing"
          value="Playing"
          className="cursor-pointer p-2 mt-2 mx-1  border-black w-26 rounded"
        >
          Playing
        </button>
      )}

      {player[game[gameIndex].date] == "Not Playing" ? (
        <button
          onClick={editStatus}
          name="Not Playing"
          value="Not Playing"
          className="cursor-pointer bg-red-200 p-2 mt-2 mx-1 
                    border-4 border-black w-26 rounded"
        >
          Not Playing
        </button>
      ) : (
        <button
          onClick={editStatus}
          name="Not Playing"
          value="Not Playing"
          className="cursor-pointer p-2 mt-2 mx-1 border-black w-26 rounded"
        >
          Not Playing
        </button>
      )}

      {player[game[gameIndex].date] == "Undecided" ? (
        <button
          onClick={editStatus}
          name="Undecided"
          value="Undecided"
          className="cursor-pointer bg-yellow-200 p-2 mt-2 mx-1 
                    border-4 border-black w-26 rounded"
        >
          Undecided
        </button>
      ) : (
        <button
          onClick={editStatus}
          name="Undecided"
          value="Undecided"
          className="cursor-pointer p-2 mt-2 mx-1 border-black w-26 rounded"
        >
          Undecided
        </button>
      )}
    </div>
  );
};
export default StatusButton;

//1. func with 3 diff states. Each state = className for playing status. classname not playing, etc.
//Look at obj and determine class

//2. pass in stat string as parameter. passes in "classes" string. Call function with player.status as parameter.

// Make status
// an array of
// strings.

// Make state in player status

// Single string
// in array for
// game state
