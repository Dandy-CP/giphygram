import styled from 'styled-components';

export const ContainerSugestion = styled.div`
  p {
    font-weight: 500;
  }
`;

export const ChannelWrap = styled.div``;

export const Channel = styled.div`
  position: relative;
  width: 350px;
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
  margin-top: 40px;
  p {
    font-size: 0.9rem;
    font-weight: 400;
    color: gray;
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
  }
`;
