import { Overlay, VideoBackground } from '../../styles/Login/login.styled';

const BackgroundLogin = () => {
  return (
    <>
      <Overlay></Overlay>
      <VideoBackground>
        <video autoPlay loop muted>
          <source src={'Videos/BgGridVideo.mp4'} type="video/mp4" />
        </video>
      </VideoBackground>
    </>
  );
};

export default BackgroundLogin;
