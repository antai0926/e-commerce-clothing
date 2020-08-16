import React from 'react';

import { addItem } from '../../redux/cart/cart.actions';
import { useDispatch } from 'react-redux';

import {
  CollectionItemContainer,
  BackgrounImage,
  CollecctionFooterContainer,
  NameContainer,
  PriceContainer,
  AddButton,
} from './collection-item.styles';

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  const dispatch = useDispatch();
  return (
    <CollectionItemContainer>
      <BackgrounImage className="image" imageUrl={imageUrl} />
      <CollecctionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>${price}</PriceContainer>
      </CollecctionFooterContainer>
      <AddButton onClick={() => dispatch(addItem(item))} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
