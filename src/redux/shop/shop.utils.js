export const selectCollectionsForPreview = (collections) => {
  return collections ? Object.values(collections) : [];
};

export const selectIsCollectionsLoaded = (collections) => {
  return !!collections;
};
