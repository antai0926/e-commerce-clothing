import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;


// import React from 'react';
// import WithSpinner from '../with-spinner/with-spinner.component';
// import CollectionsOverview from './collections-overview.component';
// import { useSelector } from 'react-redux';

// const CollectionsOverviewContainer = (props) => {
//   const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
//   const { isFetching } = useSelector((state) => state.shop);
//   return <CollectionsOverviewWithSpinner isLoading={isFetching} {...props} />;
// };

// export default CollectionsOverviewContainer;

