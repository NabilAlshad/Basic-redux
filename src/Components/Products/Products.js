import React from "react";

const Products = (props) => {
  console.log(props);
  const { products, index, addToCart } = props;

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "100px auto",
      }}
      className="text-center"
    >
      <h1>{products.name}</h1>
      <button onClick={() => addToCart(products.id)}>add to cart</button>
    </div>
  );
};

export default Products;
