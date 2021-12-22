import React, { useState, useEffect } from "react";
import { Link, navigate, Router } from "@reach/router";
import axios from "axios";
import StatusButton from "./StatusButton";

const PlayerStatus = (props) => {
  const { game, setGame, gameIndex, setGameIndex } = props;
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

  return (
    <div>
      <div className="mx-auto flex justify-around">
        {game.map((item, index) =>
          index == gameIndex ? (
            <div
              key={index}
              className="cursor-pointer text-lg mx-3 underline"
              onClick={(e) => {
                setGameIndex(index);
              }}
            >
              {item.name}
            </div>
          ) : (
            <div
              key={index}
              className="cursor-pointer  mx-3 "
              onClick={(e) => {
                setGameIndex(index);
              }}
            >
              {item.name}
            </div>
          )
        )}
      </div>

      <table className="mt-10 border-4 border-black mx-auto w-4/6">
        <tbody className="border-2 border-black">
          <tr className="border-2 border-black h-12">
            <td className="border-2 border-black">Player</td>
            <td className="border-2 border-black">Availability</td>
          </tr>

          {allPlayers.map((player, index) => (
            <tr key={index} className="border-2 border-black h-16">
              <td className="border-2 border-black">{player.name}</td>

              <td className="flex justify-evenly">
                <StatusButton
                  game={game}
                  setGameIndex={setGameIndex}
                  gameIndex={gameIndex}
                  player={player}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <StatusInfo allPlayers={allPlayers} setAllPlayers={setAllPlayers} game={game} setGame={setGame} gameIndex={gameIndex}/> */}
    </div>
  );
};

export default PlayerStatus;
