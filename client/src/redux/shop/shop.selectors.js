import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  selectShop,
  (shop) => shop.collections
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(selectCollections, (collections) =>
    collections ? collections[collectionUrlParam] : null
  );

export const selectCollectionsForPreview = createSelector(
  selectCollections,
  (collections) => (collections ? Object.values(collections) : [])
);

//for container
export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

//for container
export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
);
