import styled from 'styled-components';

export const ConnectionBox = styled.div`
  z-index: 1;
`;

export const OfflineStatus = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  margin-bottom: 20px;
  width: 350px;
  background-color: #f70d1a;
  border-radius: 20px;

  p {
    font-size: 0.8rem;
    text-align: center;
    font-weight: 600;
    margin-left: 5px;
  }
`;
