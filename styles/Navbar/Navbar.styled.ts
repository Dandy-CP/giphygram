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
  height: 100%;
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
    margin-left: 10px;
  }

  :hover {
    background-color: #22262c;
  }
`;

export const ListMoreMenu = styled.div`
  width: 210px;
  height: 150px;
  padding: 15px;
  border-radius: 5px;
  background-color: #808080;
  margin-left: 10px;
  margin-bottom: 10px;

  p {
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
    font-weight: 500;
  }

  a {
    display: flex;
    align-items: center;
    padding-left: 10px;

    :hover {
      background-color: #22262c;
      border-radius: 50px;
    }
  }
`;

export const MoreMenu = styled.div`
  width: 45%;
  position: absolute;
  bottom: 0;
`;
