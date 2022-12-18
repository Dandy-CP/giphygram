import styled from 'styled-components';

export const NavContainer = styled.div`
  width: 17.5vw;
  height: 100vh;
  background-color: ${(props: any) => props.theme.color.blackdoff};
  padding: 15px;
  position: fixed;
`;

export const Logo = styled.div`
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const MenuItem = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
`;

export const ListMenu = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  border-radius: 50px;
  margin-bottom: 10px;
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  transition: 0.5s ease-in-out;

  p {
    margin-left: 15px;
  }

  svg {
    margin-left: 20px;
  }

  :hover {
    background-color: #22262c;
  }
`;

export const ListMoreMenu = styled(ListMenu)`
  width: 300px;
  position: absolute;
  bottom: 0;
`;
