import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../../Redux/actions/CartActions";

const Cart = (props) => {
  const { cart, removeFromCart } = props;
  return (
    <div>
      <h1>this is cart</h1>
      <ul>
        {cart.map((id, i) => (
          <li>
            {id}
            <button onClick={() => removeFromCart(i)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (i) => dispatch(removeFromCart(i)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
