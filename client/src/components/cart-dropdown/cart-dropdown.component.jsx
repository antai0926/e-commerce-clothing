import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useHistory } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import CartItem from '../cart-item/cart-item.component';

import {
  CartDropDwonContainer,
  CartItemsContainer,
  EmptyMessageContainer,
  CheckoutButtonContainer,
} from './cart-dropdown.styles';

const CartDropdown = () => {
  const cartItems = useSelector(({ cart: { cartItems } }) => cartItems);
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <CartDropDwonContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageContainer> Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CheckoutButtonContainer
        onClick={() => {
          history.push('/checkout'); //withRoute pass history to this component
          dispatch(toggleCartHidden());
        }}
      >
        Go To CheckOut
      </CheckoutButtonContainer>
    </CartDropDwonContainer>
  );
};

export default CartDropdown;
