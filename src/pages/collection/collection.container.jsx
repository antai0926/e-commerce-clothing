import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from './collection.component';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;



// import React from 'react';
// import WithSpinner from '../../components/with-spinner/with-spinner.component';
// import { useSelector } from 'react-redux';
// import CollectionPage from '../collection/collection.component';

// const CollectionPageContainer = (props) => {
//   const { collections } = useSelector((state) => state.shop);
//   const CollectionPageWithSpinner = WithSpinner(CollectionPage);
//   return (
//     <CollectionPageWithSpinner
//       isLoading={collections ? false : true}
//       {...props}
//     />
//   );
// };

// export default CollectionPageContainer;
