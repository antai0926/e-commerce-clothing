import React, { useState } from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CutomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

const SignIn = () => {
  const [state, setState] = useState({ email: '', password: '' });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setState({ email: '', password: '' });
    } catch (err) {
      alert(err.message);
      console.error(`${err.code}:${err.message}`);
      setState({ email, password: '' });
      return;
    }
    setState({ email: '', password: '' });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setState({
      ...state,
      [name]: value,
    });
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
