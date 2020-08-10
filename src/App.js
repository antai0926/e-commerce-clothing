import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
// import { selectCollectionsForPreview } from './redux/shop/shop.utils';

import {
  auth,
  createUserProfileDocument,
  // addCollectionAndDocuments,
} from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

//To Practice Custom Hook
const useDetectLogin = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    //register to observ the changes of login state
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (!userAuth) {
        dispatch(setCurrentUser(userAuth));
        return;
      }
      const userRef = await createUserProfileDocument(userAuth);
      //when the userRef data change(update,create,delete) invoke onSnapshot, then we get the new snapShot to setCurrentUser
      userRef.onSnapshot((snapShot) => {
        const userData = snapShot.data();
        dispatch(
          setCurrentUser({
            id: snapShot.id,
            ...userData,
          })
        );
        console.log('currentUser:', { id: snapShot.id, ...snapShot.data() });
      });
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, [dispatch]);
};

// const useCreateShopItemsOnce = () => {
//   const collections = useSelector((state) => state.shop.collections);
//   const collectionsArr = selectCollectionsForPreview(collections);
//   useEffect(() => {
//     console.log('collectionsArr', collectionsArr);
//     const newCollectionArr = collectionsArr.map(({ title, items }) => ({
//       title,
//       items,
//     }));
//     console.log('newCollectionArr', newCollectionArr);
//     addCollectionAndDocuments('collections', newCollectionArr);
//   }, []);
// };

const App = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  useDetectLogin();
  // useCreateShopItemsOnce();
  return (
    <div>
      {/* <Helmet>
        <title>E-Commerce-Clothing</title>
      </Helmet> */}
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        />
      </Switch>
    </div>
  );
};
export default App;
