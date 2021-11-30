function App() {
  return (
    <div className="App">
      <Router>
        <ListOfDogsComponent path="/dogs" />
        <DetailDogComponent path="/dogs/:id" />
      </Router>
    </div>
  );
}

// Then, within our Detail dog component:
// DetailDogComponent.js

import React from "react";
const DetailDogComponent = (props) => {
  return <p>You are looking at the dog with id = {props.id}</p>;
};
