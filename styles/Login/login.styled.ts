import styled from 'styled-components';

export const VideoBackground = styled.div`
  width: 100vw;
  height: 100vh;
  video {
    width: 100%;
    height: 99%;
    object-fit: cover;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const ContainerLogin = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
`;

export const BoxLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  backdrop-filter: brightness(80%) blur(100px);
  -webkit-backdrop-filter: brightness(80%) blur(100px);
`;

export const FormLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    width: 400px;
    margin-bottom: 20px;
    border-radius: 5px;
    padding: 15px;
    color: black;
    background-color: white;
    border: transparent;

    :focus {
      outline: none;
    }
  }
`;

export const TogleSwitch = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 400px;
  height: 42px;
  margin-top: 50px;
  margin-bottom: 35px;
  background-color: #16181c;
  border-radius: 50px;
`;

export const TogleButtonLogin = styled.button`
  width: 200px;
  height: 42px;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 50px;
  border: transparent;
  cursor: pointer;

  background: ${(props: any) =>
    props.login === true
      ? `linear-gradient(
    -135deg,
    rgb(0, 231, 149) 0%,
    rgb(0, 187, 221) 100%
  )`
      : '#16181c'};
`;

export const TogleButtonSignUp = styled(TogleButtonLogin)`
  background: ${(props: any) =>
    props.signup === false
      ? `linear-gradient(
        -135deg,
        rgb(74, 144, 226) 0%,
        rgb(148, 56, 255) 100%
      )`
      : '#16181c'};
`;

export const ButtonLogin = styled.button`
  width: 400px;
  height: 45px;
  margin-top: 10px;
  border: transparent;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  background: rgb(111, 59, 190);
  background: -moz-linear-gradient(
    90deg,
    rgba(111, 59, 190, 1) 35%,
    rgba(75, 53, 176, 1) 100%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(111, 59, 190, 1) 35%,
    rgba(75, 53, 176, 1) 100%
  );
  background: linear-gradient(
    90deg,
    rgba(111, 59, 190, 1) 35%,
    rgba(75, 53, 176, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#6f3bbe",endColorstr="#4b35b0",GradientType=1);

  :hover {
    background: rgb(111, 59, 190);
  }
`;

export const ButtonLoginDisable = styled(ButtonLogin)`
  background: gray;
  cursor: not-allowed;

  :hover {
    background: gray;
  }
`;

export const ButtonSignup = styled(ButtonLogin)`
  margin-bottom: 20px;
`;

export const ButtonSignupDisable = styled(ButtonLogin)`
  margin-bottom: 20px;
  background: gray;
  cursor: not-allowed;

  :hover {
    background: gray;
  }
`;

export const ForgotPass = styled.p`
  font-size: 0.8rem;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 20px;
  cursor: pointer;

  :hover {
    color: skyblue;
  }
`;

export const LoginWithGoogle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 45px;
  background-color: #16181c;
  border-radius: 5px;
  cursor: pointer;

  p {
    font-weight: 500;
    text-align: center;
    margin-left: 10px;
  }
`;

export const GuestLogin = styled.p`
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  height: 50px;
  margin-top: 20px;
  transition: 0.3s ease-in-out;

  :hover {
    background: -webkit-linear-gradient(
      55deg,
      hsl(240deg 100% 20%) 0%,
      hsl(259deg 100% 23%) 21%,
      hsl(279deg 100% 27%) 30%,
      hsl(298deg 100% 30%) 39%,
      hsl(318deg 100% 33%) 46%,
      hsl(337deg 100% 37%) 54%,
      hsl(357deg 100% 40%) 61%,
      hsl(16deg 100% 43%) 69%,
      hsl(36deg 100% 47%) 79%,
      hsl(55deg 100% 50%) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const SignupWithGoogle = styled(LoginWithGoogle)``;

export const ErrorMsg = styled.div`
  position: absolute;
  width: 100%;
  height: 65px;
  top: 0;
  background-color: #ff0000;
  z-index: 1;

  p {
    text-align: center;
    font-weight: bold;
    font-size: 1.2rem;
    margin-top: 20px;
  }
`;
