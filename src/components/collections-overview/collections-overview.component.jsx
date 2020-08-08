import React from 'react';
import { useSelector } from 'react-redux';
import './collections-overview.styles.scss';
import CollectionPreview from '../collection-preview/collection-preview.component';

const CollectionsOverview = () => {
  const collections = useSelector((state) => state.shop.collections);
  const collectionsArr = Object.values(collections);
  return (
    <div className="collections-overview">
      {collectionsArr.map(({ id, ...otherItemPops }) => (
        <CollectionPreview key={id} {...otherItemPops} />
      ))}
    </div>
  );
};

export default CollectionsOverview;