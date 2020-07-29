//原生+解法
import React, { useState } from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CutomButton from '../custom-buttom/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

const SignIn = () => {
  const [state, setState] = useState({ email: '', password: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    setState({ email: '', password: '' });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    let _state = Object.assign({}, state);
    _state[name] = value;
    setState(_state);
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={state.email}
          handleChange={handleChange}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={state.password}
          handleChange={handleChange}
          label="password"
          required
        />
        <div className="buttons">
          <CutomButton type="submit">Sign in</CutomButton>
          <CutomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CutomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
