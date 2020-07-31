import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    //register to observ the changes of login state
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (!userAuth) {
        setCurrentUser(userAuth);
        return;
      }
      const userRef = await createUserProfileDocument(userAuth);
      //when the userRef data change invoke onSnapshot, then we get the new snapShot to setCurrentUser
      userRef.onSnapshot((snapShot) => {
        const userData = snapShot.data();
        setCurrentUser({
          id: snapShot.id,
          ...userData,
        });
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
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
};

export default App;
