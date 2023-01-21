import styled from 'styled-components';

export const ContainerProfile = styled.div`
  width: 65vw;
  height: 100vh;
  margin: 0 auto;
`;

export const WrapChannel = styled.div`
  margin-top: 50px;

  hr {
    border-top: 0px;
    margin-left: 10%;
    margin-bottom: 0px;
    margin-top: 50px;
    width: 79%;

    @media (-webkit-min-device-pixel-ratio: 1.25) {
      width: 70%;
      margin-left: 15%;
    }
  }
`;

export const ChannelInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    @media (-webkit-min-device-pixel-ratio: 1.25) {
      width: 150px;
      height: 150px;
    }
  }
`;

export const ChannelBanner = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px;
  padding-bottom: 0px;

  img {
    width: 79%;
    height: 100%;
  }
`;

export const ChannelDesc = styled.div`
  width: 500px;
  margin-left: 50px;

  h1 {
    display: flex;
    align-items: center;
    margin-bottom: 0px;
    margin-top: 0px;
    font-size: 1.5rem;

    @media (-webkit-min-device-pixel-ratio: 1.25) {
      font-size: 1.2rem;
    }
  }

  p {
    @media (-webkit-min-device-pixel-ratio: 1.25) {
      font-size: 0.9rem;
    }
  }

  a {
    @media (-webkit-min-device-pixel-ratio: 1.25) {
      font-size: 0.9rem;
    }
  }

  img {
    width: 25px;
    height: 25px;
    margin-left: 10px;
  }
`;

export const OtherChannel = styled.div`
  width: 400px;
  padding: 20px;
  margin-top: 20px;
  position: fixed;
  margin-right: 40px;
  right: 0;

  @media (-webkit-min-device-pixel-ratio: 1.25) {
    margin-right: 0px;
  }
`;

export const FeaturedContent = styled.div`
  width: 80%;
  height: auto;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;

  @media (-webkit-min-device-pixel-ratio: 1.25) {
    width: 70%;
  }
`;

export const FeaturedWrap = styled.div`
  height: auto;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: minmax(250px, 300px);

  @media (-webkit-min-device-pixel-ratio: 1.25) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-rows: minmax(100px, 200px);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`;

export const Content = styled.div`
  position: relative;
`;

export const Contents = styled.div`
  position: relative;
`;

export const ContentOverlay = styled.div`
  display: none;

  ${Content}:hover & {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
  }

  ${Contents}:hover & {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
  }

  svg {
    font-size: 1rem;
    cursor: pointer;
    margin-left: 20px;

    :hover {
      color: blueviolet;
    }

    @media (-webkit-min-device-pixel-ratio: 1.25) {
      font-size: 1rem;
    }
  }

  p {
    font-weight: 600;
    margin-left: 10px;
    font-size: 1.3rem;

    @media (-webkit-min-device-pixel-ratio: 1.25) {
      font-size: 1rem;
    }
  }
`;

export const UsernameProfile = styled.div`
  display: flex;
  align-items: center;

  button {
    margin-left: 20px;
    height: 25px;
    color: white;
    font-weight: bold;
    font-size: 0.7rem;
    border-radius: 5px;
    border: transparent;
    cursor: pointer;
    background: linear-gradient(
      -135deg,
      rgb(0, 231, 149) 0%,
      rgb(0, 187, 221) 100%
    );
  }
`;

export const ProfileFolowingSection = styled.div`
  display: flex;

  p {
    margin-right: 25px;
    margin-top: 10px;
    margin-bottom: 0px;
    font-weight: 500;
    cursor: pointer;
  }
`;
