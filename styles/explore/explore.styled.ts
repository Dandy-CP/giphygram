import styled from 'styled-components';

export const ContainerExplore = styled.div`
  width: 65vw;
  height: 100vh;
  margin: 0 auto;

  @media (-webkit-min-device-pixel-ratio: 1.25) {
    width: 80vw;
  }
`;

export const WrapCategories = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: 200px;
`;

export const FeaturedCategories = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 150px;
  margin: 20px;
  position: relative;
  transition: 0.2s ease-in-out;

  p {
    position: absolute;
    font-size: 1rem;
    font-weight: 600;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }

  :hover {
    transform: scale(1.1);

    :before {
      content: '';
      z-index: -1;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: linear-gradient(-45deg, #f8acff 0%, #696eff 100%);
      transform: translate3d(0, 0, 0) scale(0.95);
      filter: blur(20px);
      opacity: var(0.7);
      transition: opacity 0.3s;
      border-radius: inherit;
    }

    :after {
      content: '';
      z-index: -1;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: inherit;
      border-radius: inherit;
    }
  }

  @media (-webkit-min-device-pixel-ratio: 1.25) {
    width: 250px;
    height: 120px;
  }
`;
