import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../../Redux/actions/CartActions";
import Products from "../Products/Products";

const Shop = (props) => {
  const { products, addToCart } = props;
  console.log(products);
  return (
    <div>
      {products.map((pd) => (
        <Products products={pd} key={pd.id} addToCart={addToCart}></Products>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
    products: state.cart.products,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
  // addToCart: addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
