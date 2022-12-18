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
  }
`;

export const ChannelInfo = styled.div`
  display: flex;
  justify-content: center;
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

export const ContentToggle = styled.div`
  display: flex;
  justify-content: center;

  button {
    width: 100px;
    height: 40px;
    margin-right: 10px;
    color: white;
    font-weight: 600;
    font-size: 1rem;
    background: transparent;
    border: none;
    border-top: 1px solid white;
  }
`;

export const ChannelDesc = styled.div`
  width: 500px;
  margin-left: 50px;

  h1 {
    display: flex;
    align-items: center;
    margin-bottom: 0px;
    font-size: 1.5rem;
  }

  img {
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
`;

export const FeaturedContent = styled.div`
  /* display: flex;
  width: 90%;
  height: 100%;
  margin-top: 50px;
  margin-left: 200px; */

  width: 80%;
  height: auto;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
`;

export const FeaturedWrap = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  height: 100%; */

  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));
  grid-template-rows: repeat(auto-fit, 25%);
  grid-auto-flow: dense;
  grid-gap: 1rem; */

  /* columns: 3; */
  /* column-width: 100px; */
  /* column-count: 3; */
  height: auto;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: minmax(250px, 300px);

  /* img:nth-child(5n) {
    grid-column-end: span 2;
  } */

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

  svg {
    cursor: pointer;
    margin-left: 20px;
  }

  p {
    font-weight: 600;
    margin-left: 10px;
    font-size: 1.3rem;
  }
`;
