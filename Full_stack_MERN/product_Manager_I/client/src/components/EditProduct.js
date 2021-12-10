import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const EditProduct = (props) => {
  const { _id } = props;
  // const [productInfo, setProductInfo] = useState({});
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${_id}`)
      .then((res) => {
        console.log(res.data);
        setTitle(res.data.title);
        setPrice(res.data.price);
        setDescription(res.data.description);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = { title, price, description };
    axios
      .put(`http://localhost:8000/api/products/${_id}`, updatedProduct)
      .then((response) => {
        console.log(response.data);
        navigate("/");
      })
      .catch((err) => console.log(err.response));
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <h1>Edit Product</h1>
        <div>
          <lable htmlFor="title">Title</lable>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            id="title"
          />
          <lable htmlFor="price">Price</lable>
          <input
            type="text"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            id="price"
          />
          <lable htmlFor="description">Description</lable>
          <input
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            id="description"
          />
        </div>
        <button type="submit" class="btn btn-dark">
          Submit
        </button>
      </form>
    </div>
  );
};
export default EditProduct;
