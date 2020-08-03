import React, { useEffect } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    //register to observ the changes of login state
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (!userAuth) {
        dispatch(setCurrentUser(userAuth));
        return;
      }
      const userRef = await createUserProfileDocument(userAuth);
      //when the userRef data change invoke onSnapshot, then we get the new snapShot to setCurrentUser
      userRef.onSnapshot((snapShot) => {
        const userData = snapShot.data();
        dispatch(
          setCurrentUser({
            id: snapShot.id,
            ...userData,
          })
        );
        console.log('currentUser:', { id: snapShot.id, ...snapShot.data() });
        alert(`${userData.displayName} is Logined!`);
      });
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, []);
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
};
export default App;
