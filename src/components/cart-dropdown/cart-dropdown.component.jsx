import React from 'react';
import './cart-dropdown.styles.scss';
import { useSelector } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = () => {
  const state = useSelector((state) => state);
  console.log('state', state);
  const cartItems = useSelector(({ cart: { cartItems } }) => cartItems);
  console.log('cartItems', cartItems);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>Go To CheckOut</CustomButton>
    </div>
  );
};

export default CartDropdown;
