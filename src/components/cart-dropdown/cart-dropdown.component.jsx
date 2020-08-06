import React from 'react';
import './cart-dropdown.styles.scss';
import { useSelector, useDispatch } from 'react-redux';

import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({ history }) => {
  const cartItems = useSelector(({ cart: { cartItems } }) => cartItems);
  const dispatch = useDispatch();
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message"> Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push('/checkout'); //withRoute pass history to this component
          dispatch(toggleCartHidden());
        }}
      >
        Go To CheckOut
      </CustomButton>
    </div>
  );
};

export default withRouter(CartDropdown);
