import "./App.css";
import { Router, navigate } from "@reach/router";
import Main from "./views/Main";
import DisplayProduct from "./components/DisplayProduct";
import axios from "axios";
import EditProduct from "./components/EditProduct";
import React, { useState } from "react";

function App() {
  const [hasBeenSubmittedDummy, setHasBeenSubmittedDummy] = useState(false);
  const [errors, setErrors] = useState({});
  const handleDeleteProduct = (_id) => {
    console.log(" this is the handleDelete log.");
    axios
      .delete(`http://localhost:8000/api/products/${_id}`)
      .then((response) => {
        console.log("delete successfully", response);
        setHasBeenSubmittedDummy(!hasBeenSubmittedDummy);
        navigate("/");
      })
      .catch((err) => console.log(err.response));
  };

  return (
    <div className="App">
      <Router>
        <Main
          path="/"
          handleDeleteProduct={handleDeleteProduct}
          hasBeenSubmittedDummy={hasBeenSubmittedDummy}
          setHasBeenSubmittedDummy={setHasBeenSubmittedDummy}
        />
        <DisplayProduct
          path="/:_id"
          handleDeleteProduct={handleDeleteProduct}
        />
        <EditProduct path="/:_id/edit" />
      </Router>
    </div>
  );
}

export default App;
