import React from 'react';
import './collection.styles.scss';
import { useSelector } from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selectors.js';

const CollectionPage = ({ match }) => {
  const collectionId = match.params.collectionId;
  const selectedCollections = useSelector(selectCollection(collectionId));
  const { title, items } = selectedCollections;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
