import React, { useState } from "react";
import axios from "axios";
import "../App.css";

const Form = () => {
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [hasDelivery, setHasDelivery] = useState(false);
  const [dishImg, setDishImg] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRestaurant = {
      name,
      cuisine,
      hasDelivery,
      dishImg,
    };
    axios
      .post("http://localhost:8000/api/restaurant", newRestaurant)
      .then((response) => {
        console.log(response);
        // setName("");
        // setCuisine("");
        // setDishImg("");
        // setHasDelivery(!hasDelivery);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.errors);
        setErrors(err.response.data.errors);
      });
  };

  return (
    <div className="App">
      <h2 className="blue-text">Add A New Favorite Restaurant</h2>
      <form onSubmit={handleSubmit}>
        <div className="form_box">
          {errors.name ? <span>{errors.name.message}</span> : null}
          Name: {""}
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="form_box">
          Cuisine:
          <select onChange={(e) => setCuisine(e.target.value)} value={cuisine}>
            <option>-----</option>
            <option value="Mexican">Mexican</option>
            <option value="Pizza">Pizza</option>
            <option value="Burger">Burger</option>
          </select>
        </div>
        <div className="form_box">
          Dilivery?
          <input
            type="checkbox"
            onChange={() => setHasDelivery(!hasDelivery)}
            readOnly
            checked={hasDelivery}
          />
        </div>
        <div className="form_box">
          Dish Image Url
          <input
            type="text"
            onChange={(e) => setDishImg(e.target.value)}
            value={dishImg}
          />
        </div>
        <div className="form_box">
          <button type="submit" className="btn btn-success">
            Add Restaurant
          </button>
        </div>
        {errors &&
          Object.keys(errors).map((errKey, index) => (
            <p className="error_text" key={index}>
              {errors[errKey].message}
            </p>
          ))}
      </form>
    </div>
  );
};

export default Form;
