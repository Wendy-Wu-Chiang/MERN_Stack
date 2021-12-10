import ProductForm from "../components/ProductForm";
import React from "react";
import ProductList from "../components/ProductList";

const Main = (props) => {
  const {
    handleDeleteProduct,
    hasBeenSubmittedDummy,
    setHasBeenSubmittedDummy,
  } = props;

  return (
    <div>
      <ProductForm
        hasBeenSubmittedDummy={hasBeenSubmittedDummy}
        setHasBeenSubmittedDummy={setHasBeenSubmittedDummy}
      />
      <hr />

      <ProductList
        hasBeenSubmittedDummy={hasBeenSubmittedDummy}
        setHasBeenSubmittedDummy={setHasBeenSubmittedDummy}
        handleDeleteProduct={handleDeleteProduct}
      />
    </div>
  );
};
export default Main;
