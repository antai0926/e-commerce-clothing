import React from 'react';
import './collection.styles.scss';
import { useSelector } from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage = ({ match }) => {
  const collectionId = match.params.collectionId;
  const collections = useSelector((state) => state.shop.collections);
  const selectedCollections = collections[collectionId];
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
