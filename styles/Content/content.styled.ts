import styled from 'styled-components';

export const ContainerContent = styled.div`
  width: 65vw;
  height: 100vh;
  margin: 0 auto;
  margin-right: 200px;

  hr {
    border-top: 0;
    width: 1000px;
  }
`;

export const WrapContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;
`;

export const UsernameFromContent = styled.p`
  font-size: 1rem;
  margin-bottom: 40px;

  a {
    font-weight: 500;
    margin-left: 5px;
  }
`;

export const NoContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 50px;
`;
