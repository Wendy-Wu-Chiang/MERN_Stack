import React, { useState, useEffect } from "react";
import axios from "axios";
import ViewAll from "../components/ViewAll";
import AddPlayer from "../components/AddPlayer";
import PlayerStatus from "../components/PlayerStatus";
import Edit from "../components/Edit";
import { Router, navigate, Link } from "@reach/router";

const Main = (props) => {
  const [gameIndex, setGameIndex] = useState(0);

  const [game, setGame] = useState([
    { date: "gameOneStatus", name: "Game One" },

    { date: "gameTwoStatus", name: "Game Two" },

    { date: "gameThreeStatus", name: "Game Three" },
  ]);

  const [pageStyle, setPageStyle] = useState(3);

  const pageChanger = (e) => {
    console.log(e.target);
    console.log(e.target.value, "value");
    console.log(e.target.id);
    setPageStyle(e.target.id);
  };

  return (
    <div className="w-3/4 border mx-auto h-screen">
      <div className="flex ">
        {pageStyle == 1 ? (
          <Link to="/player">
            <h2
              id="1"
              className="mx-1 text-red-500 text-xl underline cursor-pointer"
              onClick={pageChanger}
            >
              Add to Roster <span className="text-black">|</span>
            </h2>
          </Link>
        ) : (
          <Link to="/player">
            <h2
              id="1"
              className="mx-1 text-xl cursor-pointer"
              onClick={pageChanger}
            >
              Add to Roster <span className="text-black">|</span>
            </h2>
          </Link>
        )}

        {pageStyle == 2 ? (
          <Link to="/playerStatus">
            <h2
              id="2"
              className="mx-1  text-red-500 text-xl underline cursor-pointer"
              onClick={pageChanger}
            >
              Manage Player Availability
            </h2>
          </Link>
        ) : (
          <Link to="/playerStatus">
            <h2
              id="2"
              className="mx-1 text-xl cursor-pointer"
              onClick={pageChanger}
            >
              Manage Player Availability
            </h2>
          </Link>
        )}
      </div>

      <div className="border-4">
        <div className="border flex">
          {pageStyle == 3 ? (
            <Link to="/">
              <h2
                id="3"
                className="mx-1 text-red-500 text-xl underline cursor-pointer"
                onClick={pageChanger}
              >
                List <span className="text-black">|</span>
              </h2>
            </Link>
          ) : (
            <Link to="/">
              <h2
                id="3"
                className="mx-1 text-lg cursor-pointer"
                onClick={pageChanger}
              >
                List <span className="text-black">|</span>
              </h2>
            </Link>
          )}

          {pageStyle == 4 ? (
            <Link to="/player">
              <h2
                id="4"
                className="mx-1 text-red-500 text-xl underline cursor-pointer"
                onClick={pageChanger}
              >
                Add Player
              </h2>
            </Link>
          ) : (
            <Link to="/player">
              <h2
                id="4"
                className="mx-1 text-lg cursor-pointer"
                onClick={pageChanger}
              >
                Add Player
              </h2>
            </Link>
          )}
        </div>

        <Router>
          <ViewAll default />
          <Edit path="/edit/:id" />
          <AddPlayer path="/player" />
          <PlayerStatus
            path="/playerStatus"
            game={game}
            setGame={setGame}
            gameIndex={gameIndex}
            setGameIndex={setGameIndex}
          />
        </Router>
      </div>
    </div>
  );
};

export default Main;
