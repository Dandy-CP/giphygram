import styled from 'styled-components';

export const ContainerSugestion = styled.div`
  p {
    font-weight: 500;

    @media (-webkit-min-device-pixel-ratio: 1.25) {
      font-size: 0.9rem;
    }
  }
`;

export const ChannelWrap = styled.div``;

export const Channel = styled.div`
  position: relative;
  width: 300px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  img {
    border-radius: 50px;
    margin-right: 15px;
  }

  p {
    display: flex;
    align-items: center;

    @media (-webkit-min-device-pixel-ratio: 1.25) {
      font-size: 0.8rem;
    }
  }
`;

export const FollowChannel = styled.div`
  position: absolute;
  right: 0;

  p {
    color: #0095f6;
    font-weight: 500;
    cursor: pointer;
  }
`;

export const Copyright = styled.div`
  margin-top: 20px;

  p {
    font-size: 0.9rem;
    font-weight: 400;
    color: gray;

    @media (-webkit-min-device-pixel-ratio: 1.25) {
      font-size: 0.8rem;
    }
  }

  a {
    font-size: 0.9rem;
    font-weight: 500;
    color: gray;
    margin-left: 5px;
    cursor: pointer;

    :hover {
      color: white;
    }

    @media (-webkit-min-device-pixel-ratio: 1.25) {
      font-size: 0.8rem;
    }
  }
`;
