import styled from 'styled-components';

export const ContainerUsername = styled.div`
  /* position: absolute;
  right: 500px; */
`;

export const UsernameData = styled.div`
  display: flex;
  align-items: center;

  img {
    border-radius: 50px;
  }
`;

export const NameAndUsername = styled.div`
  margin-left: 15px;

  h3 {
    margin-top: 10px;
    margin-bottom: 0px;

    @media (-webkit-min-device-pixel-ratio: 1.25) {
      font-size: 0.9rem;
    }
  }

  p {
    margin-top: 0px;

    @media (-webkit-min-device-pixel-ratio: 1.25) {
      font-size: 0.9rem;
    }
  }
`;
