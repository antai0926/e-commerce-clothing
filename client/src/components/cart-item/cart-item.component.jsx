import React from 'react';
import {
  CartItemContainer,
  CartImage,
  ItemDetailsContainer,
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemContainer>
      <CartImage src={imageUrl} alt="item" />
      <ItemDetailsContainer>
        <span>{name}</span>
        <span className="price">
          {quantity} X ${price}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default React.memo(CartItem);
