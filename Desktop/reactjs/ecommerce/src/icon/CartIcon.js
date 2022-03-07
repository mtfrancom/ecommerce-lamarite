import React from 'react';
import cartSVG from "./cart.svg"

const CartIcon = () => {
  return <img className="cart-icon" src= {cartSVG} alt='cartSVG'/>;
};

export default CartIcon;
