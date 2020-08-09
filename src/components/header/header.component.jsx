import React from 'react';
import { useSelector } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../cart-icon/cart-icon.component';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionNoCursor,
  OptionLink,
} from './header.styles';

import './header.sytles.scss';

const Header = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const hidden = useSelector(({ cart: { hidden } }) => hidden);

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        {currentUser ? (
          <OptionNoCursor>Hi~{currentUser.displayName}</OptionNoCursor>
        ) : null}
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/shop">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

export default Header;
