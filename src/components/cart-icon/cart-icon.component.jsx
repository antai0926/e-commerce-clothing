import React, { useMemo } from 'react';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { useDispatch, useSelector } from 'react-redux';

import {
  CartIconContainer,
  ShoppingIconContainer,
  ItemCountContainer,
} from './cart-icon.styles';

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const calculateItemCount = (cartItems) => {
    return cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0);
  };

  const itemCount = useMemo(() => calculateItemCount(cartItems), [cartItems]);

  return (
    <CartIconContainer onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIconContainer />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
  );
};

export default CartIcon;
