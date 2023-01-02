import { useState } from 'react';
import Image from 'next/image';

import { UserAuth } from '../../config/context/AuthContext';

import Signup from './Signup';

import {
  BoxLogin,
  ContainerLogin,
  FormLogin,
  ButtonLogin,
  TogleSwitch,
  GuestLogin,
  TogleButtonLogin,
  TogleButtonSignUp,
  ForgotPass,
  LoginWithGoogle,
  ErrorMsg,
  ButtonLoginDisable,
} from '../../styles/Login/login.styled';

import GoogleLogo from '../../public/icons/GoogleLogo.png';
import Logo from '../../public/icons/logonew.png';

interface IToggle {
  toggle: any;
  signup: any;
  login: any;
}

const Login = ({ toggle, signup, login }: IToggle) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userFirstAuthWithGoogle, setUserFristAuthWithGoogle] = useState(false);
  const [UserHasLogin, setUserHasLogin] = useState(false);
  const [error, setError] = useState('');

  const { signIn, guestUser, googleSignIn } = UserAuth();

  const handleLogin = async () => {
    if (email === '' || password === '') {
      setError('email or password cant be empty');
    } else {
      setError('');
      setUserHasLogin(true);

      try {
        await signIn(email, password);
      } catch (err: any) {
        setUserHasLogin(false);
        setError(err.message);
      }
    }
  };

  const handleLoginGoogle = async () => {
    setError('');
    setUserFristAuthWithGoogle(false);
    setUserHasLogin(true);

    try {
      await googleSignIn(userFirstAuthWithGoogle);
    } catch (err: any) {
      setUserHasLogin(false);
      setError(err.message);
    }
  };

  const handleGuestUser = async () => {
    setError('');
    setUserHasLogin(true);

    try {
      await guestUser();
    } catch (err: any) {
      setUserHasLogin(false);
      setError(err.message);
    }
  };

  return (
    <ContainerLogin>
      <BoxLogin>
        {error === '' ? null : (
          <ErrorMsg>
            <p>{error}</p>
          </ErrorMsg>
        )}
        <FormLogin>
          <Image src={Logo} width={250} alt="logo" draggable="false" />

          <TogleSwitch>
            <TogleButtonLogin
              onClick={() => {
                login();
                setUserFristAuthWithGoogle(false);
              }}
              login={toggle}
            >
              Log In
            </TogleButtonLogin>

            <TogleButtonSignUp
              onClick={() => {
                signup();
                setUserFristAuthWithGoogle(true);
              }}
              signup={toggle}
            >
              Sign Up
            </TogleButtonSignUp>
          </TogleSwitch>

          {!toggle ? (
            <Signup userSignUpWithGoogle={userFirstAuthWithGoogle} />
          ) : (
            <>
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

              {UserHasLogin ? (
                <ButtonLoginDisable disable>Take You In...</ButtonLoginDisable>
              ) : (
                <ButtonLogin onClick={handleLogin}>Log In</ButtonLogin>
              )}

              <ForgotPass>Forgot Your Password?</ForgotPass>

              <LoginWithGoogle onClick={handleLoginGoogle}>
                <Image src={GoogleLogo} width={35} alt="GoogleLogo" />
                <p>Log In With Google</p>
              </LoginWithGoogle>
            </>
          )}

          <GuestLogin onClick={handleGuestUser}>
            I&apos;m just explore take me in
          </GuestLogin>
        </FormLogin>
      </BoxLogin>
    </ContainerLogin>
  );
};

export default Login;
