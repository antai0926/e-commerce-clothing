import React, { useMemo } from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { useDispatch, useSelector } from 'react-redux';

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const calculateItemCount = (cartItems) => {
    return cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0);
  };

  const itemCount = useMemo(() => calculateItemCount(cartItems), [cartItems]);

  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default CartIcon;
