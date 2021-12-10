import React, { useState } from "react";
import axios from "axios";
import "../App.css";

const ProductForm = (props) => {
  const { hasBeenSubmittedDummy, setHasBeenSubmittedDummy, errors, setErrors } =
    props;
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const NewProductData = {
      title,
      price,
      description,
    };

    axios
      .post("http://localhost:8000/api/products", NewProductData)
      .then((response) => {
        console.log(response);
        setPrice("");
        setDescription("");
        setTitle("");
        setHasBeenSubmittedDummy(!hasBeenSubmittedDummy);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.propeerties.path);
        if (err.propeerties.path) {
          setErrors(err.propeerties.path);
        }
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Product Form</h2>
      <div className="form-div">
        Title{""}
        {/* {errors.title ? <p>{errors.title.message}</p> : null} */}
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <div className="form-div">
        Price{""}
        {/* {errors.price ? <p>{errors.price.message}</p> : null} */}
        <input
          type="text"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
      </div>
      <div className="form-div">
        Description{""}
        {/* {errors.description ? <p>{errors.description.message}</p> : null} */}
        <input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </div>
      <button type="submit" className="btn btn-success">
        Submit
      </button>
    </form>
  );
};
export default ProductForm;