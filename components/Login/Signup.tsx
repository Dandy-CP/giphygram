import { useState } from 'react';
import Image from 'next/image';

import { UserAuth } from '../../config/context/AuthContext';

import {
  ButtonSignup,
  SignupWithGoogle,
  ErrorMsg,
  ButtonSignupDisable,
} from '../../styles/Login/login.styled';

import GoogleLogo from '../../public/icons/GoogleLogo.png';

interface IFirstAuthWithGoogle {
  userSignUpWithGoogle: any;
}

const Signup = ({ userSignUpWithGoogle }: IFirstAuthWithGoogle) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [UserHasSignUp, setUserHasSignUp] = useState(false);
  const [error, setError] = useState('');
  const { createUser, googleSignIn } = UserAuth();

  const handleSignUp = async () => {
    if (username === '' || email === '' || password === '') {
      setError('Username or Email or Password cant be empty');
    } else {
      setError('');
      setUserHasSignUp(true);

      try {
        await createUser(email, password, name, username);
      } catch (err: any) {
        setUserHasSignUp(false);
        setError(err.message);
      }
    }
  };

  const handleSignUpWithGoogle = async () => {
    setError('');
    setUserHasSignUp(true);

    try {
      await googleSignIn(userSignUpWithGoogle);
    } catch (err: any) {
      setUserHasSignUp(false);
      setError(err.message);
    }
  };

  return (
    <>
      {error === '' ? null : (
        <ErrorMsg>
          <p>{error}</p>
        </ErrorMsg>
      )}

      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="text"
        placeholder="Email Address"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      {UserHasSignUp ? (
        <ButtonSignupDisable disable>Registering You...</ButtonSignupDisable>
      ) : (
        <ButtonSignup onClick={handleSignUp}>Sign Up</ButtonSignup>
      )}

      <SignupWithGoogle onClick={handleSignUpWithGoogle}>
        <Image src={GoogleLogo} width={35} alt="GoogleLogo" />
        <p>Sign Up With Google</p>
      </SignupWithGoogle>
    </>
  );
};

export default Signup;
