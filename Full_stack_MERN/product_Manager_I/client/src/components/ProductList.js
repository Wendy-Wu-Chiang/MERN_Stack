import { Link, navigate } from "@reach/router";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "../App.css";

const ProductList = (props) => {
  const { hasBeenSubmittedDummy, handleDeleteProduct } = props;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((err) => console.log(err));
  }, [hasBeenSubmittedDummy]);

  const localHandleDeleteProduct = (_id) => {
    handleDeleteProduct(_id);
  };
  const handleNavigateToEdit = (_id) => {
    navigate(`${_id}/edit`);
  };

  return (
    <div className="button_div">
      <h1>All Products</h1>
      {products.map((product, index) => (
        <div className="form-div" key={index}>
          {""}
          <Link to={`${product._id}`}>{product.title}</Link>
          <button
            onClick={() => handleNavigateToEdit(product._id)}
            class="btn btn-dark"
          >
            Edit
          </button>
          <button
            onClick={() => localHandleDeleteProduct(product._id)}
            class="btn btn-danger"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};
export default ProductList;
