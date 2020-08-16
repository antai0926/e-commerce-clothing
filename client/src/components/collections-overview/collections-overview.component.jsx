import React from 'react';
import { useSelector } from 'react-redux';
import './collections-overview.styles.scss';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

const CollectionsOverview = () => {
  const collectionsArr = useSelector(selectCollectionsForPreview);
  return (
    <div className="collections-overview">
      {collectionsArr.map(({ id, ...otherItemPops }) => (
        <CollectionPreview key={id} {...otherItemPops} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
